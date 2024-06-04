import NavbarListItem from "./NavbarListItem.jsx";

const NavBar = ({ header }) => {
  return (
    <header className="header">
      <nav className="container header__wrap">
        <a href="#banner" className="header__logo">
          <span className="header__logo-span">Home</span>
        </a>
        <ul className="header__list">
          {header.links?.map((link) => (
            <NavbarListItem link={link} key={link.id} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
