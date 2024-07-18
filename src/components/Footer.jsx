import { useContext } from "react";
import { AppContext } from "../context/appContext";

const Footer = () => {
  const { theme, t } = useContext(AppContext);
  const footerT = t("footer", { returnObjects: true });

  return (
    <footer className="footer" data-theme={theme}>
      <div className="container footer__wrap">
        <span className="footer__span"></span>
        <p className="footer__info">{t(footerT.info)}</p>
        <div className="footer__content">
          <span className="footer__content-services">
            {t(footerT.contentServices)}
          </span>
          <span className="footer__content-policy">
            {t(footerT.contentPolicy)}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
