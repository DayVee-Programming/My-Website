const NavbarListItem = ({ link }) => {
  return (
    <li className="navbar__list-item">
      <a href={link.path} className="navbar__list-item-link">
        {link.value}
      </a>
    </li>
  );
};

export default NavbarListItem;
