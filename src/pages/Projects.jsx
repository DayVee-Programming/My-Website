import { useContext } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { HomePage } from "../context/homePage.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Blurs from "../components/Blurs.jsx";

const Projects = () => {
  const { projects, theme } = useContext(HomePage);

  return (
    <>
      <NavBar />
      <div id="projects" className="projects" data-theme={theme}>
        <div className="container projects__wrap">
          <h2 className="projects__title title">
            Each project is a unique piece of development 📋
          </h2>
          <div className="projects__cards">
            {projects.cards?.map((card) => (
              <ProjectCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {theme === "dark" && <Blurs />}
    </>
  );
};

export default Projects;
