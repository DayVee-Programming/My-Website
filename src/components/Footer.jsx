import { useContext } from "react";
import { HomePage } from "../context/homePage";
import clsx from "clsx";

const Footer = () => {
  const { theme } = useContext(HomePage);
  const footerSpan = clsx("footer__span", {
    dark: theme === "dark",
  });

  return (
    <footer className="footer" data-theme={theme}>
      <div className="container footer__wrap">
        <span className={footerSpan}></span>
        <p className="footer__info">
          ©️ 2024 DayVee Programming. All rights reserved.
        </p>
        <div className="footer__content">
          <span className="footer__content-services">Terms of Services</span>
          <span className="footer__content-policy">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
