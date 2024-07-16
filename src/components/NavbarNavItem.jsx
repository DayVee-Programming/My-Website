const NavbarNavItem = ({ link }) => {
  return (
    <li className="navbar__navlinks-item">
      <a href={link.path} className="navbar__navlinks-item-link">
        {link.valueT}
      </a>
    </li>
  );
}

export default NavbarNavItem;
