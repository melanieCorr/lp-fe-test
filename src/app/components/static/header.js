export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__toggle">
            <button
              className="lp-button lp-button--outline lp-button--size-40 lp-button--icon-left "
              type="button"
            >
              <span className="lp-button__icon">
                <span className="lp-icon lp-icon--burger">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                  >
                    <use href="#lp-icon-burger"></use>
                  </svg>
                </span>
              </span>
              <span className="lp-button__label">Menu</span>
            </button>
            <span className="header__toggle-close">
              <span className="lp-icon lp-icon--close">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                >
                  <use href="#lp-icon-close"></use>
                </svg>
              </span>
            </span>
          </div>
        </div>
        <div className="header__logo">
          <h1>
            <a href="/">
              <div
                className="lp-logo lp-logo--le-parisien"
                style={{ width: 12 + "rem" }}
              >
                <svg viewBox="0 0 128 40">
                  <g fill="none" fillRule="evenodd">
                    <polygon
                      fill="#FFF"
                      points="128 0 0 0 0 40 128 40"
                    ></polygon>
                    <polygon
                      fill="#1EA0E6"
                      points="128 0 0 0 0 37 128 37"
                    ></polygon>
                    <polygon
                      fill="#F03333"
                      points="128 38 0 38 0 40 128 40"
                    ></polygon>
                    <path
                      fill="#FFF"
                      d="M49,15 C49,23 41.5,25.9 40,26.3 L40,36 L36,36 L36,6 L39.3,6 C44.1,6 49,8.2 49,15 Z M44.5,15 C44.5,10.5 42,9.4 40,9.4 L40,22.5 C40.5,22.4 44.5,20.4 44.5,15 Z M14,14 L14,36 L23,36 L23,33 L18,33 L18,14 L14,14 Z M28.2,36.0999 C28.8,36.0999 29,35.9999 29,35.9999 L29.1,35.9999 L29.1,33.1999 L28.6,33.1999 C27.3,33.1999 26,32.1999 25.8,29.6999 C27.5,29.5999 32,27.7999 32,23.4999 C32,19.8999 29.1,18.3999 27.2,18.3999 C25.2,18.3999 22,19.6999 22,27.2999 C22,34.5999 25.6,36.0999 28.2,36.0999 Z M28.5,23.1999 C28.5,25.4999 26.7,26.8999 25.5,26.9999 C25.5,22.0999 26.3,20.9999 27.3,20.9999 C28,20.9999 28.5,21.6999 28.5,23.1999 Z M54.5,35.9999 L58,35.9999 L58,21.5999 C58,17.1999 55.7,15.8999 52.5,15.8999 C50.6,15.8999 49.5,16.4999 49.5,16.4999 L49.5,19.4999 C49.7827,19.4371 50.026,19.3644 50.2607,19.2942 L50.2608,19.2942 C50.7734,19.141 51.2456,18.9999 52,18.9999 C53.1,18.9999 54,19.2999 54,20.4999 L54,20.9999 C52.5,21.1999 47,23.2999 47,29.4999 C47,33.2999 49.9,36.5999 53,36.0999 L54.5,34.6999 L54.5,35.9999 Z M51,29.4999 C51,25.7999 53.5,24.0999 54,23.9999 L54,31.7999 C54,32.1999 53.3,32.9999 52.7,32.9999 C52,32.9999 51,31.8999 51,29.4999 Z M67.5,19.5 C65.5,19.5 64,21.1 64,23.5 L64,36 L60,36 L60,16 L64,16 L64,17.5 C64.5,17 65.5,16 67.5,16 L68,16 L68,19.5 L67.5,19.5 Z M69,10 L69,14 L73,14 L73,10 L69,10 Z M73,16 L73,36 L69,36 L69,16 L73,16 Z M83.9998,30.1999 C83.9998,33.5999 80.9998,36.0999 77.4998,36.0999 C75.9998,36.0999 74.7998,35.8999 73.7998,35.4999 L75.2998,32.4999 C75.8998,32.7999 76.4998,32.8999 77.1998,32.8999 C78.4998,32.8999 79.5998,31.9999 79.5998,30.7999 C79.5998,29.3999 78.9998,28.3999 77.4998,26.6999 C74.8998,24.1999 74.0998,22.8999 74.0998,20.7999 C74.0998,17.9999 76.5998,15.8999 79.8998,15.8999 C81.3998,15.8999 82.2998,15.9999 83.0998,16.2999 L81.5998,19.2999 C81.0998,19.0999 80.6998,18.9999 79.9998,18.9999 C79.0998,18.9999 78.2998,19.6999 78.2998,20.4999 C78.2998,21.2999 78.5998,21.9999 80.2998,23.5999 C82.8998,25.7999 83.9998,27.3999 83.9998,30.1999 Z M85,10 L85,14 L89,14 L89,10 L85,10 Z M85,16 L89,16 L89,36 L85,36 L85,16 Z M101,21.4999 C101,26.4999 96.2,28.7999 94.3,28.9999 C94.5,31.8999 95.9,32.9999 97.3,32.9999 L98,32.9999 L98,35.9999 C98,35.9999 97.6,36.0999 96.9,36.0999 C93.9,36.0999 90,34.4999 90,25.9999 C90,17.1999 93.6,15.8999 96,15.8999 C98.2,15.8999 101,17.2999 101,21.4999 Z M93.9,25.9999 C95.2,25.8999 97.1,24.1999 97.1,21.4999 C97.1,19.6999 96.6,18.9999 95.8,18.9999 C94.8,18.9999 93.9,19.5999 93.9,25.9999 Z M114,22.7997 C114,17.4997 111.1,15.5997 107,15.9997 L106,16.9997 L106,15.9997 L102,15.9997 L102,35.9997 L106,35.9997 L106,21.4997 C106,20.0997 107,18.9997 108,18.9997 C109,18.9997 110,20.0997 110,21.4997 L110,35.9997 L114,35.9997 L114,22.7997 Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <span className="lp-sr-only">
                Le Parisien : Actualités en direct et info en continu
              </span>
            </a>
          </h1>
        </div>
        <div className="header__right">
          <div className="header__newspaper">
            <button type="button" className="lp-reset-element header__link">
              <span className="lp-icon lp-icon--newspaper">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="24"
                  height="24"
                >
                  <use href="#lp-icon-newspaper"></use>
                </svg>
              </span>
              <span className="header__newspaper-text">Journal</span>
            </button>
          </div>
          <div className="header__login">
            <button
              className="lp-button lp-button--outline lp-button--size-40 lp-button--icon-left "
              type="button"
            >
              <span className="lp-button__icon">
                <span className="lp-icon lp-icon--user-with-dot">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                  >
                    <use href="#lp-icon-user-with-dot"></use>
                  </svg>
                </span>
              </span>
              <span className="lp-button__label">Se connecter</span>
            </button>
          </div>
          <div className="header__subscription">
            <button
              className="lp-button lp-button--subscription lp-button--size-40  "
              type="button"
            >
              <span className="lp-button__label">S'abonner</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
