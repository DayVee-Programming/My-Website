import clsx from "clsx";
import { images } from "../utils/images.js";
import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";
import ProjectsCardItem from "./ProjectsCardItem.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsCard = ({ card }) => {
  const { theme } = useContext(AppContext);
  const projectsCardsCardDescText = clsx("projects__cards-card-desc-text", {
    "dark-text": theme === "dark",
  });
  const projectsCardsCardDescSourceLinkImg = clsx(
    "projects__cards-card-desc-source-link-img",
    {
      light: theme === "dark",
    }
  );
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <li key={card.id} className="projects__cards-card">
      <Slider {...settings} className="projects__cards-card-slider">
        {card.images.map((image) => (
          <img
            key={image.id}
            src={image.value}
            alt=""
            className="projects__cards-card-slider-img"
          />
        ))}
      </Slider>
      <div className="projects__cards-card-desc">
        <h2 className="projects__cards-card-desc-title">{card.title}</h2>
        <p className={projectsCardsCardDescText}>{card.textT}</p>
        <ul className="projects__cards-card-desc-list">
          {card.list?.map((item) => (
            <ProjectsCardItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="projects__cards-card-desc-source">
          <a
            href={card.liveLink}
            target="_blank"
            className="projects__cards-card-desc-source-link"
          >
            <p className="projects__cards-card-desc-source-link-text">Live</p>
            <img
              className={projectsCardsCardDescSourceLinkImg}
              src={images.liveIcon}
              alt=""
            />
          </a>
          <a
            href={card.codeLink}
            target="_blank"
            className="projects__cards-card-desc-source-link"
          >
            <p className="projects__cards-card-desc-source-link-text">Code</p>
            <img
              className={projectsCardsCardDescSourceLinkImg}
              src={images.githubIcon}
              alt=""
            />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectsCard;
