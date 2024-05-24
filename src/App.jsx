import { useState } from "react";
import { images } from "./assets/images/images.js";
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
        value: "About",
        toSection: "#about",
      },
      {
        id: 2,
        value: "Projects",
        toSection: "#projects",
      },
      {
        id: 3,
        value: "Contact",
        toSection: "#contact",
      },
    ],
  });
  const [bannerProps, setBannerProps] = useState({
    title: "Front-End Developer 👋",
    text: `Hi, I'm Davronbek Reyimbaev. A passionate front-end developer based in Tashkent, Uzbekistan 🎈`,
    stackImages: [
      {
        id: 1,
        value: images.html_icon,
      },
      {
        id: 2,
        value: images.css_icon,
      },
      {
        id: 3,
        value: images.js_icon,
      },
      {
        id: 4,
        value: images.typescript_icon,
      },
      {
        id: 5,
        value: images.react_icon,
      },
    ],
    profileImages: [
      {
        id: 1,
        value: images.github_icon,
      },
      {
        id: 2,
        value: images.linkedIn_icon,
      },
    ],
  });
  const [aboutProps, setAboutProps] = useState({
    title: "A passionate front-end developer based in Tashkent, Uzbekistan 🎈",
    text: `I'm a highly motivated junior front-end developer with a strong foundation in HTML, CSS, and JavaScript. I'm passionate about creating user-friendly and responsive web interfaces. While I'm new to the professional world, I'm a quick learner and eager to contribute to a team environment. I'm always looking for opportunities to expand my knowledge and take on new challenges in the ever-evolving world of web development.`,
    image: images.webDevelopment,
  });
  const [projectsProps, setProjectsProps] = useState({
    cards: [
      {
        id: Math.random(),
        title: "Edusity 📚",
        text: `Edusity's cutting edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.`,
        stack: ["React"],
        liveLink: "https://edusity-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Edusity",
        image: images.edusity,
      },
      {
        id: Math.random(),
        title: "Zone 🎥",
        text: `Zone has over 15 year exprience in business consulting arena.`,
        stack: ["HTML", "CSS", "JS"],
        liveLink: "https://zone-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Zone",
        image: images.zone,
      },
      {
        id: Math.random(),
        title: "BlueCollar 👷",
        text: `Bluecollar Electrical services are trusted and reliable electricians who serve customers throughout United States Of America. They have extensive experience of domestic and business electrical installations.`,
        stack: ["HTML", "CSS"],
        liveLink: "https://blue-collar-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Blue-Collar",
        image: images.blueCollar,
      },
      {
        id: Math.random(),
        title: "Antools 🛠️",
        text: "Antool is a web collection of information on paid or free Design and Development tools.",
        stack: ["HTML", "CSS"],
        liveLink: "https://antools-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Antools",
        image: images.antools,
      },
      {
        id: Math.random(),
        title: "CrypAppy 💰",
        text: `The crypto portfolio app`,
        stack: ["HTML", "CSS"],
        liveLink: "https://crypappy-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/CrypAppy",
        image: images.crypAppy,
      },
      {
        id: Math.random(),
        title: "Nike 👟",
        text: `Nike is an athletic footwear and apparel corporation. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment.`,
        stack: ["HTML", "CSS"],
        liveLink: "https://nike-big-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Nike-Big",
        image: images.nike,
      },
      {
        id: Math.random(),
        title: "Soundtrack 🎧",
        text: `Soundtrack provides services to connect with visitors in real time.`,
        stack: ["HTML", "CSS"],
        liveLink: "https://soundtrack-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Soundtrack",
        image: images.soundtrack,
      },
      {
        id: Math.random(),
        title: "Pokemon Fighter 🃏",
        text: `Pokemon Fighter is an interactive game from Pokémon main game series.`,
        stack: ["HTML", "CSS", "JS"],
        liveLink: "https://pokemon-fighter-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Pokemon-Fighter",
        image: images.pokemon,
      },
      {
        id: Math.random(),
        title: "Simon 👨‍🔬",
        text: `Simon is an electronic game of short-term memory.`,
        stack: ["HTML", "CSS", "JS"],
        liveLink: "https://simon-game-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Simon-Game",
        image: images.simon,
      },
    ],
  });
  const [contactProps, setContactProps] = useState({
    title: "Send me a message 📧",
    text: `Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.`,
    links: [
      {
        id: 1,
        value: images.telegram_icon,
        text: "Telegram: @Davron1702",
      },
      {
        id: 2,
        value: images.gmail_icon,
        text: "Email: davronbek4business@gmail.com",
      },
    ],
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
