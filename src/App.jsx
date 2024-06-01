import { useState } from "react";
import { images } from "./assets/images/images.js";
import Header from "./assets/components/Header/Header.jsx";
import Banner from "./assets/components/Banner/Banner.jsx";
import About from "./assets/components/About/About.jsx";
import Projects from "./assets/components/Projects/Projects.jsx";
import Contact from "./assets/components/Contact/Contact.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";

const App = () => {
  const [header, setHeader] = useState({
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
  const [banner, setBanner] = useState({
    stackImages: [
      {
        id: 1,
        value: images.html_icon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        id: 2,
        value: images.css_icon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        id: 3,
        value: images.js_icon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        id: 4,
        value: images.typescript_icon,
        link: "https://www.typescriptlang.org/",
      },
      {
        id: 5,
        value: images.react_icon,
        link: "https://react.dev/",
      },
      {
        id: 6,
        value: images.sass_icon,
        link: "https://sass-lang.com/",
      },
    ],
    profileImages: [
      {
        id: 1,
        value: images.github_icon,
        link: "https://github.com/DayVee-Programming",
      },
      {
        id: 2,
        value: images.linkedIn_icon,
        link: "https://www.linkedin.com/in/dayvee-programming-7b7664228/",
      },
    ],
  });
  const [projects, setProjects] = useState({
    cards: [
      {
        id: Math.random(),
        title: "Edusity 📚",
        text: `Edusity's cutting edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.`,
        list: [{ id: 1, value: "React" }],
        liveLink: "https://edusity-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Edusity",
        image: images.edusity,
      },
      {
        id: Math.random(),
        title: "Zone 🎥",
        text: `Zone has over 15 year exprience in business consulting arena.`,
        list: [
          { id: 1, value: "HTML" },
          { id: 2, value: "CSS" },
          { id: 3, value: "JS" },
        ],
        liveLink: "https://zone-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Zone",
        image: images.zone,
      },
      {
        id: Math.random(),
        title: "BlueCollar 👷",
        text: `Bluecollar Electrical services are trusted and reliable electricians who serve customers throughout United States Of America. They have extensive experience of domestic and business electrical installations.`,
        list: [
          { id: 1, value: "HTML" },
          { id: 2, value: "CSS" },
        ],
        liveLink: "https://blue-collar-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Blue-Collar",
        image: images.blueCollar,
      },
      {
        id: Math.random(),
        title: "Antools 🛠️",
        text: "Antool is a web collection of information on paid or free Design and Development tools.",
        list: [
          { id: 1, value: "HTML" },
          { id: 2, value: "CSS" },
        ],
        liveLink: "https://antools-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Antools",
        image: images.antools,
      },
      {
        id: Math.random(),
        title: "CrypAppy 💰",
        text: `The crypto portfolio app.`,
        list: [
          { id: 1, value: "HTML" },
          { id: 2, value: "CSS" },
        ],
        liveLink: "https://crypappy-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/CrypAppy",
        image: images.crypAppy,
      },
      {
        id: Math.random(),
        title: "Nike 👟",
        text: `Nike is an athletic footwear and apparel corporation. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment.`,
        list: [
          { id: 1, value: "HTML" },
          { id: 2, value: "CSS" },
        ],
        liveLink: "https://nike-big-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Nike-Big",
        image: images.nike,
      },
      {
        id: Math.random(),
        title: "Soundtrack 🎧",
        text: `Soundtrack provides services to connect with visitors in real time.`,
        list: [
          { id: 1, value: "HTML" },
          { id: 2, value: "CSS" },
        ],
        liveLink: "https://soundtrack-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Soundtrack",
        image: images.soundtrack,
      },
      {
        id: Math.random(),
        title: "Pokemon Fighter 🃏",
        text: `Pokemon Fighter is an interactive game from Pokémon main game series.`,
        list: [
          { id: 1, value: "HTML" },
          { id: 2, value: "CSS" },
          { id: 3, value: "JS" },
        ],
        liveLink: "https://pokemon-fighter-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Pokemon-Fighter",
        image: images.pokemon,
      },
      {
        id: Math.random(),
        title: "Simon 👨‍🔬",
        text: `Simon is an electronic game of short-term memory.`,
        list: [
          { id: 1, value: "HTML" },
          { id: 2, value: "CSS" },
          { id: 3, value: "JS" },
        ],
        liveLink: "https://simon-game-website.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Simon-Game",
        image: images.simon,
      },
    ],
  });
  const [contact, setContact] = useState({
    links: [
      {
        id: 1,
        value: images.telegram_icon,
        appName: "Telegram:",
        text: "@Davron1702",
        link: "https://telegram.org/",
      },
      {
        id: 2,
        value: images.gmail_icon,
        appName: "Email:",
        text: "davronbek4business@gmail.com",
        link: "https://g.co/kgs/yaSxgYn",
      },
    ],
  });

  return (
    <>
      <Header header={header} />
      <Banner banner={banner} />
      <About />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
};

export default App;
