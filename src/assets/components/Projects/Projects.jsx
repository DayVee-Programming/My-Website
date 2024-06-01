import "./Projects.css";
import ProjectCard from "./ProjectCard.jsx";

const Projects = ({ projects }) => {
  return (
    <div id="projects" className="projects">
      <div className="container projects__wrap">
        <div className="projects__desc">
          <p className="projects__desc-tag tag">Portfolio</p>
          <h2 className="projects__desc-title title">
            Each project is a unique piece of development 📋
          </h2>
        </div>
        <div className="projects__cards">
          {projects.cards?.map((card) => (
            <ProjectCard card={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
