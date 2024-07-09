const AboutStackLink = ({ img }) => {
  return (
    <a href={img.link} target="_blank" className="about__stack-links-link">
      <img src={img.value} alt="" className="about__stack-links-link-img" />
    </a>
  );
};

export default AboutStackLink;
