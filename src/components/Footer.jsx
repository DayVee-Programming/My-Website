import { useContext } from "react";
import { HomePage } from "../context/homePage";
import clsx from "clsx";

const Footer = () => {
  const { theme, t } = useContext(HomePage);
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
