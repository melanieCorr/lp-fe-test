export default function Nav() {
  return (
    <nav className="nav is-dropdown-ready">
      <div className="lp-scroll-container lp-box-sizing lp-font-smoothing">
        <button
          className="lp-scroll-container__btn lp-scroll-container__btn--prev is-disabled"
          type="button"
          data-direction="prev"
        >
          <span className="lp-sr-only">
            Défiler les accès rapides vers la gauche
          </span>
          <span className="lp-icon lp-icon--caret-left-small">
            <svg aria-hidden="true" focusable="false" width="24" height="24">
              <use href="#lp-icon-caret-left-small"></use>
            </svg>
          </span>
        </button>
        <div className="lp-scroll-container__scroll">
          <ul className="nav__list">
            <li className="nav__item ">
              <a className="nav__link is-active" href="/" data-category="À la une">
                À la une
              </a>
            </li>
            <li className="nav__item ">
              <button className="nav__link lp-reset-element">
                Île-de-France &amp; Oise
                <span className="lp-icon lp-icon--caret-down-small">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                  >
                    <use href="#lp-icon-caret-down-small"></use>
                  </svg>
                </span>
              </button>
            </li>
            <li className="nav__item  nav__item--separator-right">
              <a
                className="nav__link "
                href="/actualites-en-continu/"
                data-category="En continu"
              >
                En continu
              </a>
            </li>
            <li className="nav__item ">
              <a
                className="nav__link "
                href="/faits-divers/"
                data-category="Faits divers"
              >
                Faits divers
              </a>
            </li>
            <li className="nav__item ">
              <a
                className="nav__link "
                href="/politique/"
                data-category="Politique"
              >
                Politique
              </a>
            </li>
            <li className="nav__item ">
              <a className="nav__link " href="/" data-category="Économie">
                Économie
              </a>
            </li>
            <li className="nav__item ">
              <a className="nav__link " href="/" data-category="Société">
                Société
              </a>
            </li>
            <li className="nav__item ">
              <a className="nav__link " href="/" data-category="Sports">
                Sports
              </a>
            </li>
            <li className="nav__item ">
              <a
                className="nav__link "
                href="/"
                data-category="Culture"
              >
                Culture
              </a>
            </li>
            <li className="nav__item ">
              <a className="nav__link " href="/" data-category="Étudiant">
                Étudiant
              </a>
            </li>
            <li className="nav__item  nav__item--separator-right">
              <a className="nav__link " href="/" data-category="Vidéos">
                <span className="lp-icon lp-icon--video">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                  >
                    <use href="#lp-icon-video"></use>
                  </svg>
                </span>
                Vidéos
              </a>
            </li>
            <li className="nav__item  nav__item--secondary">
              <a
                className="nav__link "
                href="/"
                data-category="Guide d'achat"
              >
                Guide d'achat
              </a>
            </li>
            <li className="nav__item  nav__item--secondary">
              <a
                className="nav__link "
                href="/"
                data-category="Codes promo"
              >
                Codes promo
              </a>
            </li>
          </ul>
        </div>
        <button
          className="lp-scroll-container__btn lp-scroll-container__btn--next"
          type="button"
          data-direction="next"
        >
          <span className="lp-sr-only">
            Défiler les accès rapides vers la droite
          </span>
          <span className="lp-icon lp-icon--caret-right-small">
            <svg aria-hidden="true" focusable="false" width="24" height="24">
              <use href="#lp-icon-caret-right-small"></use>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
}
