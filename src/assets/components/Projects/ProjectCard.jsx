import { images } from "../../images/images.js";
import ProjectCardItem from "./ProjectCardItem.jsx";

const ProjectCard = ({ card }) => {
  return (
    <div key={card.id} className="projects__cards-card">
      <div className="projects__cards-card-pic">
        <img src={card.image} alt="" className="projects__cards-card-pic-img" />
      </div>
      <div className="projects__cards-card-desc">
        <h2 className="projects__cards-card-desc-title">{card.title}</h2>
        <p className="projects__cards-card-desc-text">{card.text}</p>
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
              src={images.live_icon}
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
              src={images.github_icon}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
