import clsx from "clsx";
import { images } from "../assets/images/images.js";
import BannerContentLink from "./BannerContentLink.jsx";
import BannerStackLink from "./BannerStackLink.jsx";
import { useContext } from "react";
import { HomePage } from "../context/homePage.jsx";

const Banner = ({ banner }) => {
  const { theme } = useContext(HomePage);
  const bannerMainContentText = clsx("banner__main-content-text", {
    "dark-text": theme === "dark",
  });

  return (
    <div id="banner" className="banner">
      <div className="container banner__wrap">
        <div className="banner__main">
          <div className="banner__main-content">
            <h1 className="banner__main-content-title">
              Front-End Developer 👋
            </h1>
            <p className={bannerMainContentText}>
              Hi, I'm Davronbek Reyimbaev. A passionate front-end developer
              based in Uzbekistan 🎈
            </p>
            <div className="banner__main-content-links">
              {banner.profileImages?.map((img) => (
                <BannerContentLink img={img} key={img.id} />
              ))}
            </div>
          </div>
          <img src={images.selfie} alt="" className="banner__main-img" />
        </div>
        <div className="banner__stack">
          <p className="banner__stack-text">Tech Stack</p>
          <div className="banner__stack-links">
            {banner.stackImages?.map((img) => (
              <BannerStackLink img={img} key={img.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
