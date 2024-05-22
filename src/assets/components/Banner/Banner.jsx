import "./Banner.css";
import { useState } from "react";
import html from "../../images/html5.png";
import css from "../../images/css3.png";
import js from "../../images/javascript.png";
import ts from "../../images/typescript.png";
import react from "../../images/react.png";
import linkedIn from "../../images/linkedin.png";
import github from "../../images/github.png";

const Banner = ({ bannerProps }) => {
  const [images, setImages] = useState([
    {
      id: 1,
      value: html,
    },
    {
      id: 2,
      value: css,
    },
    {
      id: 3,
      value: js,
    },
    {
      id: 4,
      value: ts,
    },
    {
      id: 5,
      value: react,
    },
  ]);
  const [socials, setSocials] = useState([
    {
      id: 1,
      value: linkedIn,
    },
    {
      id: 2,
      value: github,
    },
  ])

  const generateImages = () => {
    return images.map((el) => (
      <a href="#" key={el.id} className="banner__stack-links-link">
        <img src={el.value} alt="" className="banner__stack-links-link-img" />
      </a>
    ));
  };

  return (
    <div className="banner">
      <div className="container banner__wrap">
        <div className="banner__main">
          <div className="banner__main-content">
            <h1 className="banner__main-content-title">{bannerProps.title}</h1>
            <p className="banner__main-content-text">{bannerProps.text}</p>
          </div>
          <div className="banner__main-pic">
            <img src="#" alt="" className="banner__main-pic-img" />
          </div>
        </div>
        <div className="banner__stack">
          <p className="banner__stack-text">Tech Stack</p>
          <div className="banner__stack-links">{generateImages()}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
