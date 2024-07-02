const NavbarListItem = ({ link }) => {
  return (
    <li className="navbar__list-item">
      <a className="navbar__list-item-link" href={link.toSection}>
        {link.value}
      </a>
    </li>
  );
};

export default NavbarListItem;
