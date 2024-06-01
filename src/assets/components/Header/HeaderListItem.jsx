const HeaderListItem = ({ link }) => {
  return (
    <li className="header__list-item">
      <a className="header__list-item-link" href={link.toSection}>
        {link.value}
      </a>
    </li>
  );
};

export default HeaderListItem;
