import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const ProjectCardItem = ({ item }) => {
  const { theme } = useContext(AppContext);
  const projectsCardsCardDescListItem = clsx(
    "projects__cards-card-desc-list-item",
    {
      light: theme === "dark",
    }
  );

  return <li className={projectsCardsCardDescListItem}>{item.value}</li>;
};

export default ProjectCardItem;
