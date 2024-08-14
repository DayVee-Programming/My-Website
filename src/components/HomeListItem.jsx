import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const HomeListItem = ({ link }) => {
  const { theme } = useContext(AppContext);
  const listItemS = clsx("home__main-list-item", {
    light: theme === "dark",
  });

  return (
    <li className={listItemS}>
      <a href={link.path} className="home__main-list-item-link">
        {link.valueT}
      </a>
    </li>
  );
};

export default HomeListItem;
