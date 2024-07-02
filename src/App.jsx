import { useState } from "react";
import { images } from "./assets/images/images.js";
import NavBar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { HomePage } from "./context/homePage.jsx";
import Blurs from "./components/Blurs.jsx";

const App = () => {
  const [navbar, setNavbar] = useState({
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
        value: images.htmlIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        id: 2,
        value: images.cssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        id: 3,
        value: images.jsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        id: 4,
        value: images.typescriptIcon,
        link: "https://www.typescriptlang.org/",
      },
      {
        id: 5,
        value: images.reactIcon,
        link: "https://react.dev/",
      },
      {
        id: 6,
        value: images.sassIcon,
        link: "https://sass-lang.com/",
      },
    ],
    profileImages: [
      {
        id: 1,
        value: images.githubIcon,
        value2: images.githubIcon2,
        link: "https://github.com/DayVee-Programming",
      },
      {
        id: 2,
        value: images.linkedInIcon,
        link: "https://www.linkedin.com/in/dayvee-programming-7b7664228/",
      },
    ],
  });
  const [projects, setProjects] = useState({
    cards: [
      {
        id: Math.random(),
        title: "Gitpod 💻",
        text: `With Gitpod spin up fresh, automated dev environments for each task, in the cloud, in seconds.`,
        list: [
          { id: 1, value: "React" },
          { id: 2, value: "SASS" },
        ],
        liveLink: "https://gitpod-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Gitpod",
        image: images.gitpod,
      },
      {
        id: Math.random(),
        title: "Zone 🎥",
        text: `Zone has over 15 year experience in business consulting arena.`,
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
        value: images.telegramIcon,
        appName: "Telegram:",
        text: "@Davron1702",
        link: "https://t.me/Davron1702",
      },
      {
        id: 2,
        value: images.gmailIcon,
        appName: "Email:",
        text: "davronbek4business@gmail.com",
        link: "https://g.co/kgs/yaSxgYn",
      },
    ],
  });
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HomePage.Provider
      value={{
        theme,
        setTheme,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      <div className="app-container" data-theme={theme}>
        <NavBar navbar={navbar} />
        <main>
          <Banner banner={banner} />
          <About />
          <Projects projects={projects} />
          <Contact contact={contact} />
        </main>
        <Footer />

        {theme === "dark" && <Blurs />}
      </div>
    </HomePage.Provider>
  );
};

export default App;
