import { useContext } from "react";
import { HomePage } from "../context/homePage";

const BannerContentLink = ({ img }) => {
  const { theme } = useContext(HomePage);

  return (
    <a
      href={img.link}
      target="_blank"
      className="banner__main-content-links-link"
    >
      <img
        className="banner__main-content-links-link-img"
        src={theme === "dark" && img.value2 ? img.value2 : img.value}
        alt=""
      />
    </a>
  );
};

export default BannerContentLink;
