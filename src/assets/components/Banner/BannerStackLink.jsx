const BannerStackLink = ({ img }) => {
  return (
    <a
      href={img.link}
      target="_blank"
      className="banner__stack-links-link"
    >
      <img src={img.value} alt="" className="banner__stack-links-link-img" />
    </a>
  );
};

export default BannerStackLink;
