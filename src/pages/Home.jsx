import clsx from "clsx";
import { images } from "../assets/images/images.js";
import HomeContentLink from "../components/HomeContentLink.jsx";
import HomeStackLink from "../components/HomeStackLink.jsx";
import { useContext } from "react";
import { HomePage } from "../context/homePage.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Blurs from "../components/Blurs.jsx";

const Home = () => {
  const { home, theme } = useContext(HomePage);
  const homeMainContentText = clsx("home__main-content-text", {
    "dark-text": theme === "dark",
  });

  return (
    <>
      <NavBar />
      <div id="home" className="home" data-theme={theme}>
        <div className="container home__wrap">
          <div className="home__main">
            <div className="home__main-content">
              <h1 className="home__main-content-title">
                Front-End Developer 👋
              </h1>
              <p className={homeMainContentText}>
                Hi, I'm Davronbek Reyimbaev. A passionate front-end developer
                based in Uzbekistan 🎈
              </p>
              <div className="home__main-content-links">
                {home.profileImages?.map((img) => (
                  <HomeContentLink img={img} key={img.id} />
                ))}
              </div>
            </div>
            <img src={images.selfie} alt="" className="home__main-img" />
          </div>
          <div className="home__stack">
            <p className="home__stack-text">Tech Stack</p>
            <div className="home__stack-links">
              {home.stackImages?.map((img) => (
                <HomeStackLink img={img} key={img.id} />
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

export default Home;
