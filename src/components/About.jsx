import { images } from "../assets/images/images.js";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container about__wrap">
        <img className="about__img" src={images.webDevelopment} alt="" />
        <div className="about__main">
          <p className="about__main-tag tag">About Me</p>
          <h2 className="about__main-title title">Love coding 💻</h2>
          <p className="about__main-text">
            I'm a highly motivated junior front-end developer with a strong
            foundation in HTML, CSS, and JavaScript. I'm passionate about
            creating user-friendly and responsive web interfaces. While I'm new
            to the professional world, I'm a quick learner and eager to
            contribute to a team environment. I'm always looking for
            opportunities to expand my knowledge and take on new challenges in
            the ever-evolving world of web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
