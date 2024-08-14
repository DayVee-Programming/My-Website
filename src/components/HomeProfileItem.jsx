import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const HomeProfileItem = ({ img }) => {
  const { theme } = useContext(AppContext);
  const linkImgS = clsx(
    "home__main-content-profile-item-link-img",
    {
      light: theme === "dark",
    }
  );

  return (
    <li className="home__main-content-profile-item">
      <a
        href={img.link}
        target="_blank"
        className="home__main-content-profile-item-link"
      >
        <img
          className={linkImgS}
          src={img.value}
          alt=""
        />
      </a>
    </li>
  );
};

export default HomeProfileItem;
