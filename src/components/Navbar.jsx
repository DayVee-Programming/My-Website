import { ImSun } from "react-icons/im";
import NavbarListItem from "./NavbarListItem.jsx";
import { useContext } from "react";
import { HomePage } from "../context/homePage.jsx";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarMenuItem from "./NavbarMenuItem.jsx";

const NavBar = () => {
  const { navbar, theme, setTheme } = useContext(HomePage);
  const { isMenuOpen, setIsMenuOpen } = useContext(HomePage);

  return (
    <header className="navbar"  data-theme={theme}>
      <nav className="container navbar__wrap">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-span">Home</span>
        </a>
        <ul className="navbar__list">
          {navbar.links?.map((link) => (
            <NavbarListItem link={link} key={link.id} />
          ))}
        </ul>
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
          </li>
          <li
            className="navbar__btns-item"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <GiHamburgerMenu className="navbar__btns-item-img" />
            {isMenuOpen && (
              <ul className="navbar__btns-item-menu">
                {navbar.links?.map((link) => (
                  <NavbarMenuItem link={link} key={link.id} />
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
