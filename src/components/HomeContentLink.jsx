import { useContext } from "react";
import { AppContext } from "../context/appContext";

const BannerContentLink = ({ img }) => {
  const { theme } = useContext(AppContext);

  return (
    <a
      href={img.link}
      target="_blank"
      className="home__main-content-links-link"
    >
      <img
        className="home__main-content-links-link-img"
        src={theme === "dark" && img.value2 ? img.value2 : img.value}
        alt=""
      />
    </a>
  );
};

export default BannerContentLink;
