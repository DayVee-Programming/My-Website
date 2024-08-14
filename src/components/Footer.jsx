import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const Footer = () => {
  const { theme, t } = useContext(AppContext);
  const footerT = t("footer", { returnObjects: true });
  const footerS = clsx("footer", {
    light: theme === "dark",
  });

  return (
    <footer className={footerS} data-theme={theme}>
      <div className="container footer__wrapper">
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
