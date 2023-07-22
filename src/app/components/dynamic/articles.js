import moment from "moment"; 
import Image from "next/image";

import "./articles.css";
import articles from "../../../data/articles.json";

const Articles = () => {
  return (
    <>
      {articles.map((article, idx) => {
        return (
          <div key={idx} className="card">
            <Image 
              src={article.promo_items.basic.url} 
              width={article.promo_items.basic.width} 
              height={article.promo_items.basic.height}
              alt={article.promo_items.basic.caption}
            />
            <div className="card-container">
              <b>
                {article.label.format !== undefined
                    ? <span style={{ color:"#2E86C1" }}>{article.label.format.text}</span> 
                    : null}{" "}
              </b>
              <p>
                {article.headlines.basic}{" "}
              </p>
            </div>
            <div className="card-footer">
              <span style={{ color: "lightgrey" }}>
                {moment(article.publish_date).fromNow()}{" "}
                
                {article.label.profil !== undefined && article.label.profil.text === "ABO" 
                  ? <span style={{ color: "#F1C40F" }}>abonnés</span> 
                  : null}{" "}
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Articles;