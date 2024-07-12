import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const Footer = () => {
  const { theme, t } = useContext(AppContext);
  const footerT = t("footer", { returnObjects: true });
  const footerSpan = clsx("footer__span", {
    dark: theme === "dark",
  });

  return (
    <footer className="footer" data-theme={theme}>
      <div className="container footer__wrap">
        <span className={footerSpan}></span>
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
