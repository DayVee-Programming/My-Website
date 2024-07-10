import { useContext } from "react";
import { images } from "../assets/images/images.js";
import { HomePage } from "../context/homePage.jsx";
import clsx from "clsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Blurs from "../components/Blurs.jsx";
import AboutStackLink from "../components/AboutStackLink.jsx";

const About = () => {
  const { about, theme, t } = useContext(HomePage);
  const aboutT = t("about", { returnObjects: true });
  const aboutMainDescText = clsx("about__main-desc-text", {
    "dark-text": theme === "dark",
  });

  return (
    <>
      <NavBar />
      <div id="about" className="about" data-theme={theme}>
        <div className="container about__wrap">
          <div className="about__main">
            <img
              className="about__main-img"
              src={images.webDevelopment}
              alt=""
            />
            <div className="about__main-desc">
              <h2 className="about__main-desc-title title">
                {t(aboutT.mainDescTitle)}
              </h2>
              <p className={aboutMainDescText}>{t(aboutT.mainDescText)}</p>
            </div>
          </div>
          <div className="about__stack">
            <p className="about__stack-text">{t(aboutT.stackText)}</p>
            <div className="about__stack-links">
              {about.stackImages?.map((img) => (
                <AboutStackLink img={img} key={img.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {theme === "dark" && <Blurs />}
    </>
  );
};

export default About;
