import { useState } from "react";
import Header from "./assets/components/Header/Header.jsx";
import Banner from "./assets/components/Banner/Banner.jsx";
import About from "./assets/components/About/About.jsx";
import Projects from "./assets/components/Projects/Projects.jsx";
import Contact from "./assets/components/Contact/Contact.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";

const App = () => {
  const [headerProps, setHeaderProps] = useState({
    links: [
      {
        id: 1,
        value: "Home",
      },
      {
        id: 2,
        value: "About",
      },
      {
        id: 3,
        value: "Projects",
      },
      {
        id: 4,
        value: "Contact",
      },
    ],
  });
  const [bannerProps, setBannerProps] = useState({
    title: "Front-End Developer 👋",
    text: `Hi, I'm Davronbek Reyimbaev. A passionate front-end developer based in Tashkent, Uzbekistan 🎈`,
  });
  const [aboutProps, setAboutProps] = useState({
    title: "A passionate front-end developer based in Tashkent, Uzbekistan 🎈",
    text: `I'm a highly motivated junior front-end developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about creating user-friendly and responsive web interfaces. While I'm new to the professional world, I'm a quick learner and eager to contribute to a team environment. I'm always looking for opportunities to expand my knowledge and take on new challenges in the ever-evolving world of web development.`,
  });
  const [projectsProps, setProjectsProps] = useState({
    cards: [
      {
        id: 1,
        title: "Car Rental 🚙",
        text: "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
        stack: ["React", "SCSS"],
      },
      {
        id: 2,
        title: "Coindom 🌑",
        text: "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time",
        stack: ["React", "SCSS"],
      },
    ],
  });
  const [contactProps, setContactProps] = useState({
    title: "Send me a message 📧",
    text: `Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.`,
  });

  return (
    <>
      <Header headerProps={headerProps} />
      <Banner bannerProps={bannerProps} />
      <About aboutProps={aboutProps} />
      <Projects projectsProps={projectsProps} />
      <Contact contactProps={contactProps} />
      <Footer />
    </>
  );
};

export default App;
