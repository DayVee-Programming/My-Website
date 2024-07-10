import { ImSun } from "react-icons/im";
import NavbarListItem from "./NavbarListItem.jsx";
import { useContext } from "react";
import { HomePage } from "../context/homePage.jsx";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarMenuItem from "./NavbarMenuItem.jsx";
import { IoLanguage } from "react-icons/io5";
import clsx from "clsx";

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
  } = useContext(HomePage);
  const { isMenuOpen, setIsMenuOpen } = useContext(HomePage);
  const navbarT = t("navbar", { returnObjects: true });
  const navbarBtnsItemBtnImg = clsx("navbar__btns-item-btn-img", {
    light: theme === "dark",
  });

  const changeLang = () => {
    const currentLang = language === "en" ? "ru" : "en";
    setLanguage(currentLang);
    i18n.changeLanguage(currentLang);
  };
  const generateList = (type) => {
    const navbarLng = {
      links: [],
    };
    for (let i = 0; i < navbar.links.length; i++) {
      const link = {
        id: navbar.links[i].id,
        value: navbar.links[i].value,
        path: navbar.links[i].path,
        valueT: navbarT.links[i].value,
      };
      navbarLng.links.push(link);
    }
    if (type === "menu") {
      return navbarLng.links.map((link) => (
        <NavbarMenuItem link={link} key={link.id} />
      ));
    } else {
      return navbarLng.links.map((link) => (
        <NavbarListItem link={link} key={link.id} />
      ));
    }
  };

  return (
    <header className="navbar" data-theme={theme}>
      <nav className="container navbar__wrap">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-span">{t(navbarT.logoSpan)}</span>
        </a>
        <ul className="navbar__list">{generateList()}</ul>
        <ul className="navbar__btns">
          <li className="navbar__btns-item">
            <button
              className="navbar__btns-item-btn"
              onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
            >
              {theme === "light" ? (
                <MdDarkMode className="navbar__btns-item-btn-img moon" />
              ) : (
                <ImSun className="navbar__btns-item-btn-img sun" />
              )}
            </button>
            <button
              className="navbar__btns-item-btn"
              onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <IoLanguage className={navbarBtnsItemBtnImg} />
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
            <GiHamburgerMenu className="navbar__btns-item-img" />
            {isMenuOpen && (
              <ul className={"navbar__btns-item-menu"}>
                {generateList("menu")}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
