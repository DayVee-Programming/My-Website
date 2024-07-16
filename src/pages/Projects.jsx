import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProjectsCard from "../components/ProjectsCard.jsx";

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
      <ProjectsCard card={card} key={card.id} />
    ));
  };

  return (
    <>
      <NavBar />
      <div id="projects" className="projects" data-theme={theme}>
        <div className="container projects__wrap">
          <h2 className="projects__title title">{t(projectsT.title)}</h2>
          <ul className="projects__cards">{generateCards()}</ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
