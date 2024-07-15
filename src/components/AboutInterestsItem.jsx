import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const AboutInterestsItem = ({ interest }) => {
  const { theme } = useContext(AppContext);
  const aboutInterestsCardsItemLink = clsx("about__interests-cards-item-link", {
    light: theme === "dark",
  });
  const aboutInterestsCardsItemLinkText = clsx(
    "about__interests-cards-item-link-text",
    {
      light: theme === "dark",
    }
  );

  return (
    <li className="about__interests-cards-item">
      <a
        href={interest.link}
        target="_blank"
        className={aboutInterestsCardsItemLink}
      >
        <img
          src={interest.value}
          alt=""
          className="about__interests-cards-item-link-img"
        />
        <p className={aboutInterestsCardsItemLinkText}>{interest.textT}</p>
      </a>
    </li>
  );
};

export default AboutInterestsItem;
