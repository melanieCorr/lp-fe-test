//This is an static component for the bloc 'en-continu'
import EnContinu from "./static/en-continu";
import Articles from "./dynamic/articles";

export default function Content() {
  return (
    <div className="layout-homepage__top">
      <div className="lp-container lp-container--fixed-narrow">
        <div className="arcad__wrapper">
          <section className="relative">
            {/* TODO : Add your code here */}
            <div style={{ display: "flex", marginTop:"20px" }}>
              <div>
                <Articles/>
              </div>
              <div>
                <EnContinu/>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
