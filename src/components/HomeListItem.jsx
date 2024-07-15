import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const HomeListItem = ({ link }) => {
  const { theme } = useContext(AppContext);
  const homeMainListItemLink = clsx("home__main-list-item-link", {
    light: theme === "dark",
  });

  return (
    <li className="home__main-list-item">
      <a href={link.path} className={homeMainListItemLink}>
        {link.valueT}
      </a>
    </li>
  );
};

export default HomeListItem;
