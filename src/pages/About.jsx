import { useContext } from "react";
import { images } from "../assets/images/images.js";
import { HomePage } from "../context/homePage.jsx";
import clsx from "clsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Blurs from "../components/Blurs.jsx";
import AboutStackLink from "../components/AboutStackLink.jsx";

const About = () => {
  const { about, theme } = useContext(HomePage);
  const aboutMainText = clsx("about__main-desc-text", {
    "dark-text": theme === "dark",
  });

  return (
    <>
      <NavBar />
      <div id="about" className="about" data-theme={theme}>
        <div className="container about__wrap">
          <div className="about__main">
            <img className="about__main-img" src={images.webDevelopment} alt="" />
            <div className="about__main-desc">
              <h2 className="about__main-desc-title title">Love coding 💻</h2>
              <p className={aboutMainText}>
                I'm a highly motivated junior front-end developer with a strong
                foundation in HTML, CSS, and JavaScript. I'm passionate about
                creating user-friendly and responsive web interfaces. While I'm
                new to the professional world, I'm a quick learner and eager to
                contribute to a team environment. My toolbox is stocked with the
                modern technologies like TypeScript, React, SASS. I'm always
                looking for opportunities to expand my knowledge and take on new
                challenges in the ever-evolving world of web development.
              </p>
            </div>
          </div>
          <div className="about__stack">
            <p className="about__stack-text">Tech Stack</p>
            <div className="about__stack-links">
              {about.stackImages?.map((img) => (
                <AboutStackLink img={img} key={img.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {theme === "dark" && <Blurs />}
    </>
  );
};

export default About;
