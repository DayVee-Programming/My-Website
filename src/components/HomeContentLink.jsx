import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const BannerContentLink = ({ img }) => {
  const { theme } = useContext(AppContext);
  const homeMainContentLinksLinkImg = clsx(
    "home__main-content-links-link-img",
    {
      light: theme === "dark",
    }
  );

  return (
    <a
      href={img.link}
      target="_blank"
      className="home__main-content-links-link"
    >
      <img className={homeMainContentLinksLinkImg} src={img.value} alt="" />
    </a>
  );
};

export default BannerContentLink;
