import "./Projects.css";
import { images } from "../../images/images.js";

const Projects = ({ projectsProps }) => {
  const generateCards = () => {
    return projectsProps.cards.map((el) => (
      <div key={el.id} className="projects__cards-card">
        <div className="projects__cards-card-pic">
          <img src={el.image} alt="" className="projects__cards-card-pic-img" />
        </div>
        <div className="projects__cards-card-desc">
          <h2 className="projects__cards-card-desc-title">{el.title}</h2>
          <p className="projects__cards-card-desc-text">{el.text}</p>
          <div className="projects__cards-card-desc-stack">
            {el.stack.map((element) => (
              <span
                key={Math.random()}
                className="projects__cards-card-desc-stack-span"
              >
                {element}
              </span>
            ))}
          </div>
          <div className="projects__cards-card-desc-source">
            <a
              href={el.liveLink}
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
              href={el.codeLink}
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
    ));
  };

  return (
    <div id="projects" className="projects">
      <div className="container projects__wrap">
        <div className="projects__desc">
          <p className="projects__desc-tag tag">Portfolio</p>
          <h2 className="projects__desc-title title">
            Each project is a unique piece of development
          </h2>
        </div>
        <div className="projects__cards">{generateCards()}</div>
      </div>
    </div>
  );
};

export default Projects;
