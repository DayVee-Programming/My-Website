import { images } from "../../images/images";
import "./Banner.css";

const Banner = ({ bannerProps }) => {
  const generateStackLinks = () => {
    return bannerProps.stackImages.map((el) => (
      <a href={el.link} target="_blank" key={el.id} className="banner__stack-links-link">
        <img src={el.value} alt="" className="banner__stack-links-link-img" />
      </a>
    ));
  };
  const generateProfileLinks = () => {
    return bannerProps.profileImages.map((img) => (
      <a
        key={img.id}
        href={img.link}
        target="_blank"
        className="banner__main-content-links-link"
      >
        <img
          className="banner__main-content-links-link-img"
          src={img.value}
          alt=""
        />
      </a>
    ));
  };

  return (
    <div id="banner" className="banner">
      <div className="container banner__wrap">
        <div className="banner__main">
          <div className="banner__main-content">
            <h1 className="banner__main-content-title">{bannerProps.title}</h1>
            <p className="banner__main-content-text">{bannerProps.text}</p>
            <div className="banner__main-content-links">
              {generateProfileLinks()}
            </div>
          </div>
          <div className="banner__main-pic">
            <img src={images.selfie} alt="" className="banner__main-pic-img" />
          </div>
        </div>
        <div className="banner__stack">
          <p className="banner__stack-text">Tech Stack</p>
          <div className="banner__stack-links">{generateStackLinks()}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
