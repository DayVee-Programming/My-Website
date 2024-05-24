import "./Header.css";

const NavBar = ({ headerProps }) => {
  const generateItems = () => {
    return headerProps.links.map((el) => (
      <li key={el.id} className="header__list-item">
        <a className="header__list-item-link" href={el.toSection}>
          {el.value}
        </a>
      </li>
    ));
  };

  return (
    <header className="header">
      <div className="container header__wrap">
        <a href="#banner" className="header__logo">
          <span className="header__logo-span">Home</span>
        </a>
        <ul className="header__list">{generateItems()}</ul>
      </div>
    </header>
  );
};

export default NavBar;
