const NavbarMenuItem = ({ link }) => {
  return (
    <li className="navbar__btns-item-menu-item">
      <a href={link.path} className="navbar__btns-item-menu-item-link">
        {link.value}
      </a>
    </li>
  );
};

export default NavbarMenuItem;
