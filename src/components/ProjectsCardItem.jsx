import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const ProjectsCardItem = ({ item }) => {
  const { theme } = useContext(AppContext);
  const listItemS = clsx(
    "projects__cards-card-desc-list-item",
    {
      light: theme === "dark",
    }
  );

  return <li className={listItemS}>{item.value}</li>;
};

export default ProjectsCardItem;
