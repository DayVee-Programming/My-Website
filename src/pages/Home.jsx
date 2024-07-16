import clsx from "clsx";
import { images } from "../assets/images/images.js";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/appContext.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Typed from "typed.js";
import HomeListItem from "../components/HomeListItem.jsx";
import HomeProfileItem from "../components/HomeProfileItem.jsx";

const Home = () => {
  const { home, theme, t, navbar } = useContext(AppContext);
  const homeT = t("home", { returnObjects: true });
  const homeMainContentText = clsx("home__main-content-text", {
    "dark-text": theme === "dark",
  });
  const homeMainImg = clsx("home__main-img", {
    light: theme === "dark",
  });
  const navbarT = t("navbar", { returnObjects: true });
  const title = useRef(null);

  const generateList = () => {
    const homeLng = {
      links: [],
    };
    for (let i = 0; i < navbar.navLinks.length; i++) {
      const lngObj = {
        valueT: navbarT.links[i].value,
      };
      const link = Object.assign(navbar.navLinks[i], lngObj);
      homeLng.links = [...homeLng.links, link];
    }
    return homeLng.links.map((link) => (
      <HomeListItem link={link} key={link.id} />
    ));
  };
  useEffect(() => {
    const typed = new Typed(title.current, {
      strings: [`${t(homeT.mainContentTitle)}`],
      typeSpeed: 70,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <NavBar />
      <div id="home" className="home" data-theme={theme}>
        <div className="container home__wrap">
          <div className="home__main">
            <div className="home__main-content">
              <h1 className="home__main-content-title" ref={title}></h1>
              <p className={homeMainContentText}>{t(homeT.mainContentText)}</p>
              <ul className="home__main-list">{generateList()}</ul>
              <ul className="home__main-content-profile">
                {home.profileLinks?.map((img) => (
                  <HomeProfileItem img={img} key={img.id} />
                ))}
              </ul>
            </div>
            <img src={images.selfie} alt="" className={homeMainImg} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
