import { useContext, useEffect, useState } from "react";
import { images } from "../utils/images.js";
import { AppContext } from "../context/appContext.jsx";
import clsx from "clsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AboutInterestsItem from "../components/AboutInterestsItem.jsx";
import AboutStackItem from "../components/AboutStackItem.jsx";

const About = () => {
  const { about, theme, t } = useContext(AppContext);
  const aboutT = t("about", { returnObjects: true });
  const aboutMainDescText = clsx("about__main-desc-text", {
    "dark-text": theme === "dark",
  });
  const aboutMainImg = clsx("about__main-img", {
    light: theme === "dark",
  });
  const [showSecondEl, setShowSecondEl] = useState(false);
  const [showThirdEl, setShowThirdEl] = useState(false);

  const generateInterestsItems = () => {
    const aboutLng = {
      interestsLinks: [],
    };
    for (let i = 0; i < about.interestsLinks.length; i++) {
      const lngObj = {
        textT: aboutT.interests[i].text,
      };
      const link = Object.assign(about.interestsLinks[i], lngObj);
      aboutLng.interestsLinks = [...aboutLng.interestsLinks, link];
    }
    return aboutLng.interestsLinks?.map((interest) => (
      <AboutInterestsItem interest={interest} key={interest.id} />
    ));
  };
  useEffect(() => {
    setTimeout(() => {
      setShowSecondEl(true);
    }, 2000);
    setTimeout(() => {
      setShowThirdEl(true);
    }, 4000);
  }, []);

  return (
    <>
      <NavBar />
      <div id="about" className="about" data-theme={theme}>
        <div className="container about__wrap">
          <div className="about__main">
            <img className={aboutMainImg} src={images.webDevelopment} alt="" />
            <div className="about__main-desc">
              <h2 className="about__main-desc-title title">
                {t(aboutT.mainDescTitle)}
              </h2>
              <p className={aboutMainDescText}>{t(aboutT.mainDescText)}</p>
            </div>
          </div>
          <div className="about__stack">
            <p className="about__stack-text">{t(aboutT.stackText)}</p>
            <ul className="about__stack-links">
              {about.stackLinks?.map((img) => (
                <AboutStackItem img={img} key={img.id} />
              ))}
            </ul>
          </div>
          <div className="about__stack">
            <p className="about__stack-text">{t(aboutT.toolsText)}</p>
            <ul className="about__stack-links">
              {about.toolsLinks?.map((img) => (
                <AboutStackItem img={img} key={img.id} />
              ))}
            </ul>
          </div>
          <div className="about__interests">
            <h2 className="about__interests-title title">
              {t(aboutT.interestsText)}
            </h2>
            <ul className="about__interests-cards">
              {generateInterestsItems()}
            </ul>
          </div>
        </div>
        <div className="bg-el first"></div>
        {showSecondEl && <div className="bg-el second"></div>}
        {showThirdEl && <div className="bg-el third"></div>}
      </div>
      <Footer />
    </>
  );
};

export default About;
