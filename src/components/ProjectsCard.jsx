import clsx from "clsx";
import { images } from "../assets/images/images.js";
import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";
import ProjectsCardItem from "./ProjectsCardItem.jsx";

const ProjectsCard = ({ card }) => {
  const { theme } = useContext(AppContext);
  const projectsCardsCardDescText = clsx("projects__cards-card-desc-text", {
    "dark-text": theme === "dark",
  });
  const projectsCardsCardPicImg = clsx("projects__cards-card-pic-img", {
    light: theme === "dark",
  });
  const projectsCardsCardDescSourceLinkImg = clsx(
    "projects__cards-card-desc-source-link-img",
    {
      light: theme === "dark",
    }
  );

  return (
    <li key={card.id} className="projects__cards-card">
      <div className="projects__cards-card-pic">
        <img src={card.image} alt="" className={projectsCardsCardPicImg} />
      </div>
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
