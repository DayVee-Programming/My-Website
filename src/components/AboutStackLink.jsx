import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const AboutStackLink = ({ img }) => {
  const { theme } = useContext(AppContext);
  const aboutStackLinksLinkImg = clsx("about__stack-links-link-img", {
    light: theme === "dark",
  });

  return (
    <a href={img.link} target="_blank" className="about__stack-links-link">
      <img src={img.value} alt="" className={aboutStackLinksLinkImg} />
    </a>
  );
};

export default AboutStackLink;
