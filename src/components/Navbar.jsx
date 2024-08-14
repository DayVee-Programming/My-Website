import { ImSun } from "react-icons/im";
import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarMenuItem from "./NavbarMenuItem.jsx";
import { IoLanguage } from "react-icons/io5";
import clsx from "clsx";
import NavbarNavItem from "./NavbarNavItem.jsx";
import { images } from "../utils/images.js";

const NavBar = () => {
  const {
    navbar,
    theme,
    setTheme,
    isDropdownOpen,
    setIsDropdownOpen,
    language,
    setLanguage,
    i18n,
    t,
  } = useContext(AppContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(AppContext);
  const navbarT = t("navbar", { returnObjects: true });
  const btnImgS = clsx("navbar__btns-item-btn-img", {
    "light-menu": isMenuOpen,
    light: theme === "dark",
  });
  const itemMenuS = clsx("navbar__btns-item-menu", {
    closed: !isMenuOpen,
  });
  const imgIconsS = clsx("navbar__btns-item-btn-img", {
    moon: theme === "light",
    sun: theme === "dark",
    "moon-menu": isMenuOpen,
    "sun-menu": isMenuOpen,
  });
  const itemImgS = clsx("navbar__btns-item-img", {
    "light-menu": isMenuOpen,
  });
  const navbarS = clsx("navbar", {
    light: theme === "dark",
  });

  const changeTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      localStorage.setItem("theme", JSON.stringify("light"));
    }
    setTheme(JSON.parse(localStorage.getItem("theme")));
  };
  const changeLang = () => {
    const currentLang = language === "en" ? "ru" : "en";
    setLanguage(currentLang);
    i18n.changeLanguage(currentLang);
  };
  const generateNavbarItems = (type) => {
    const navbarLng = {
      links: [],
    };
    for (let i = 0; i < navbar.navLinks.length; i++) {
      const lngObj = {
        valueT: navbarT.links[i].value,
      };
      const link = Object.assign(navbar.navLinks[i], lngObj);
      navbarLng.links = [...navbarLng.links, link];
    }
    if (type === "menu") {
      return navbarLng.links.map((link) => (
        <NavbarMenuItem link={link} key={link.id} />
      ));
    } else {
      return navbarLng.links.map((link) => (
        <NavbarNavItem link={link} key={link.id} />
      ));
    }
  };

  return (
    <header className={navbarS} data-theme={theme}>
      <nav className="container navbar__wrapper">
        <a href="/" className="navbar__logo">
          <img
            className="navbar__logo-img"
            src={theme === "light" ? images.logo : images.logo2}
            alt=""
          />
        </a>
        <ul className="navbar__navlinks">{generateNavbarItems()}</ul>
        <ul className="navbar__btns">
          <li className="navbar__btns-item">
            <button
              className="navbar__btns-item-btn"
              onClick={() => changeTheme()}
            >
              {theme === "light" ? (
                <MdDarkMode className={imgIconsS} />
              ) : (
                <ImSun className={imgIconsS} />
              )}
            </button>
            <button
              className="navbar__btns-item-btn"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <IoLanguage className={btnImgS} />
              {isDropdownOpen && (
                <ul className="navbar__btns-item-btn-dropdown">
                  {language === "ru" && (
                    <li
                      className="navbar__btns-item-btn-dropdown-item"
                      onClick={() => changeLang()}
                    >
                      English
                    </li>
                  )}
                  {language === "en" && (
                    <li
                      className="navbar__btns-item-btn-dropdown-item"
                      onClick={() => changeLang()}
                    >
                      Русский
                    </li>
                  )}
                </ul>
              )}
            </button>
          </li>
          <li
            className="navbar__btns-item"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu className={itemImgS} />
            {isMenuOpen && (
              <ul className={itemMenuS}>
                {generateNavbarItems("menu")}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
