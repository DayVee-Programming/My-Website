import "./Projects.css";
import github from "../../images/github.png";
import live from "../../images/live.png";

const Projects = ({ projectsProps }) => {
  const generateDesc = () =>
    projectsProps.cards.map((el) => (
      <div key={el.id} className="projects__cards-card">
        <div className="projects__cards-card-pic">
          <img src="#" alt="" className="projects__cards-card-pic-img" />
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
            <a href="#" className="projects__cards-card-desc-source-link">
              <p className="projects__cards-card-desc-source-link-text">
                Live
              </p>
              <img
                className="projects__cards-card-desc-source-link-img"
                src={live}
                alt=""
              />
            </a>
            <a href="#" className="projects__cards-card-desc-source-link">
              <p className="projects__cards-card-desc-source-link-text">Code</p>
              <img
                className="projects__cards-card-desc-source-link-img"
                src={github}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="projects">
      <div className="container projects__wrap">
        <div className="projects__desc">
          <p className="projects__desc-tag tag">Portfolio</p>
          <h2 className="projects__desc-title title">
            Each project is a unique piece of development
          </h2>
        </div>
        <div className="projects__cards">{generateDesc()}</div>
      </div>
    </div>
  );
};

export default Projects;
