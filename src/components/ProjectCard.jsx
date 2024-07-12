import clsx from "clsx";
import { images } from "../assets/images/images.js";
import ProjectCardItem from "./ProjectCardItem.jsx";
import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";

const ProjectCard = ({ card }) => {
  const { theme } = useContext(AppContext);
  const projectsCardsCardDescText = clsx("projects__cards-card-desc-text", {
    "dark-text": theme === "dark",
  });
  const projectsCardsCardPicImg = clsx("projects__cards-card-pic-img", {
    light: theme === "dark",
  });

  return (
    <div key={card.id} className="projects__cards-card">
      <div className="projects__cards-card-pic">
        <img src={card.image} alt="" className={projectsCardsCardPicImg} />
      </div>
      <div className="projects__cards-card-desc">
        <h2 className="projects__cards-card-desc-title">{card.title}</h2>
        <p className={projectsCardsCardDescText}>{card.textT}</p>
        <ul className="projects__cards-card-desc-list">
          {card.list?.map((item) => (
            <ProjectCardItem item={item} key={item.id} />
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
              className="projects__cards-card-desc-source-link-img"
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
              className="projects__cards-card-desc-source-link-img"
              src={theme === "light" ? images.githubIcon : images.githubIcon2}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
