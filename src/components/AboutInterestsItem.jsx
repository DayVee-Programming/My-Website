import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const AboutInterestsItem = ({ interest }) => {
  const { theme } = useContext(AppContext);
  const itemLinkS = clsx("about__interests-cards-item-link", {
    light: theme === "dark",
  });
  const linkTextS = clsx("about__interests-cards-item-link-text", {
    light: theme === "dark",
  });

  return (
    <li className="about__interests-cards-item">
      <a href={interest.link} target="_blank" className={itemLinkS}>
        <img
          src={interest.value}
          alt=""
          className="about__interests-cards-item-link-img"
        />
        <p className={linkTextS}>{interest.textT}</p>
      </a>
    </li>
  );
};

export default AboutInterestsItem;
