import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const AboutStackItem = ({ img }) => {
  const { theme } = useContext(AppContext);
  const aboutStackLinksItemLinkImg = clsx("about__stack-links-item-link-img", {
    light: theme === "dark",
  });

  return (
    <li className="about__stack-links-item">
      <a
        href={img.link}
        target="_blank"
        className="about__stack-links-item-link"
      >
        <img src={img.value} alt="" className={aboutStackLinksItemLinkImg} />
        <span className="about__stack-links-item-link-info">{img.info}</span>
      </a>
    </li>
  );
};

export default AboutStackItem;
