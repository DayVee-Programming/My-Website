import "./About.css";
import webDevelopment from "../../images/web-development.jpg";

const About = ({ aboutProps }) => {
  return (
    <div className="about">
      <div className="container about__wrap">
        <div className="about__pic"></div>
        <div className="about__main">
          <p className="about__main-tag tag">About Me</p>
          <h2 className="about__main-title title">{aboutProps.title}</h2>
          <p className="about__main-text">{aboutProps.text}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
