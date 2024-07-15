import { useContext } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { AppContext } from "../context/appContext.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Projects = () => {
  const { projects, theme, t } = useContext(AppContext);
  const projectsT = t("projects", { returnObjects: true });

  const generateCards = () => {
    const projectsLng = {
      cards: [],
    };
    for (let i = 0; i < projects.cards.length; i++) {
      const lngObj = {
        textT: projectsT.cards[i].text,
      };
      const link = Object.assign(projects.cards[i], lngObj);
      projectsLng.cards = [...projectsLng.cards, link];
    }
    return projectsLng.cards?.map((card) => (
      <ProjectCard card={card} key={card.id} />
    ));
  };

  return (
    <>
      <NavBar />
      <div id="projects" className="projects" data-theme={theme}>
        <div className="container projects__wrap">
          <h2 className="projects__title title">{t(projectsT.title)}</h2>
          <div className="projects__cards">{generateCards()}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
