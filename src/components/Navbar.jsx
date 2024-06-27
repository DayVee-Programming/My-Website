import { ImSun } from "react-icons/im";
import NavbarListItem from "./NavbarListItem.jsx";

const NavBar = ({ header }) => {
  return (
    <header className="header">
      <nav className="container header__wrap">
        <a className="header__logo" onClick={() => scrollTo(0, 0)}>
          <span className="header__logo-span">Home</span>
        </a>
        <ul className="header__list">
          {header.links?.map((link) => (
            <NavbarListItem link={link} key={link.id} />
          ))}
          <li className="header__list-item">
            <button className="header__list-item-btn">
              <ImSun className="header__list-item-btn-img" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
