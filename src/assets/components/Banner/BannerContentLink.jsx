const BannerContentLink = ({ img }) => {
  return (
    <a
      href={img.link}
      target="_blank"
      className="banner__main-content-links-link"
    >
      <img
        className="banner__main-content-links-link-img"
        src={img.value}
        alt=""
      />
    </a>
  );
};

export default BannerContentLink;
