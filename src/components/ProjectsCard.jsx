import clsx from "clsx";
import { images } from "../utils/images.js";
import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";
import ProjectsCardItem from "./ProjectsCardItem.jsx";

const ProjectsCard = ({ card }) => {
  const { theme } = useContext(AppContext);
  const descTextS = clsx("projects__cards-card-desc-text", {
    "dark-text": theme === "dark",
  });
  const linkImgS = clsx("projects__cards-card-desc-source-link-img", {
    light: theme === "dark",
  });
  const cardImgS = clsx("projects__cards-card-img", {
    light: theme === "dark",
  });

  return (
    <li key={card.id} className="projects__cards-card">
      <img src={card.images[0].value} alt="" className={cardImgS} />
      <div className="projects__cards-card-desc">
        <h2 className="projects__cards-card-desc-title">{card.title}</h2>
        <p className={descTextS}>{card.textT}</p>
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
            <img className={linkImgS} src={images.liveIcon} alt="" />
          </a>
          <a
            href={card.codeLink}
            target="_blank"
            className="projects__cards-card-desc-source-link"
          >
            <p className="projects__cards-card-desc-source-link-text">Code</p>
            <img className={linkImgS} src={images.githubIcon} alt="" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default ProjectsCard;
