import "./Header.css";
import HeaderListItem from "./HeaderListItem.jsx";

const NavBar = ({ header }) => {
  return (
    <header className="header">
      <div className="container header__wrap">
        <a href="#banner" className="header__logo">
          <span className="header__logo-span">Home</span>
        </a>
        <ul className="header__list">
          {header.links?.map((link) => (
            <HeaderListItem link={link} key={link.id} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
