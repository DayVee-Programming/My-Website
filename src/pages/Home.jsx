import clsx from "clsx";
import { images } from "../assets/images/images.js";
import HomeContentLink from "../components/HomeContentLink.jsx";
import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const { home, theme, t } = useContext(AppContext);
  const homeT = t("home", { returnObjects: true });
  const homeMainContentText = clsx("home__main-content-text", {
    "dark-text": theme === "dark",
  });
  const homeMainImg = clsx("home__main-img", {
    light: theme === "dark",
  });

  return (
    <>
      <NavBar />
      <div id="home" className="home" data-theme={theme}>
        <div className="container home__wrap">
          <div className="home__main">
            <div className="home__main-content">
              <h1 className="home__main-content-title">
                {t(homeT.mainContentTitle)}
              </h1>
              <p className={homeMainContentText}>{t(homeT.mainContentText)}</p>
              <div className="home__main-content-links">
                {home.profileImages?.map((img) => (
                  <HomeContentLink img={img} key={img.id} />
                ))}
              </div>
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
