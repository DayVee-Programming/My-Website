import { useEffect, useState } from "react";
import { images } from "./assets/images/images.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { AppContext } from "./context/appContext.jsx";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import { useTranslation } from "react-i18next";

const App = () => {
  const [navbar, setNavbar] = useState({
    links: [
      {
        id: 1,
        value: "About",
        path: "/about",
      },
      {
        id: 2,
        value: "Projects",
        path: "/projects",
      },
      {
        id: 3,
        value: "Contact",
        path: "/contact",
      },
    ],
  });
  const [home, setHome] = useState({
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
  const [about, setAbout] = useState({
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
    toolsImages: [
      {
        id: 1,
        value: images.viteIcon,
        link: "https://vitejs.dev/",
      },
      {
        id: 2,
        value: images.figmaIcon,
        link: "https://www.figma.com/",
      },
      {
        id: 3,
        value: images.npmIcon,
        link: "https://www.npmjs.com/",
      },
      {
        id: 4,
        value: images.gitIcon,
        link: "https://www.git-scm.com/",
      },
      {
        id: 5,
        value: images.bemIcon,
        link: "https://en.bem.info/methodology/",
      },
    ],
    interestsImages: [
      {
        id: 1,
        value: images.videoGamesIcon,
        link: `https://en.wikipedia.org/wiki/Video_game`,
      },
      {
        id: 2,
        value: images.chessIcon,
        link: `https://en.wikipedia.org/wiki/Chess`,
      },
      {
        id: 3,
        value: images.cardGamesIcon,
        link: `https://en.wikipedia.org/wiki/Card_game`,
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
        liveLink: "https://zone-web.netlify.app/",
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
        liveLink: "https://blue-collar-webs.netlify.app/",
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
        liveLink: "https://antools-webs.netlify.app/",
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
        liveLink: "https://crypappy-web.netlify.app/",
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
        liveLink: "https://nike-big-web.netlify.app/",
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
        liveLink: "https://soundtrack-web.netlify.app/",
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
        liveLink: "https://pokemon-fighter-web.netlify.app/",
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
        liveLink: "https://simon-game-webs.netlify.app/",
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
      {
        id: 3,
        value: images.whatsAppIcon,
        appName: "WhatsApp:",
        text: "Davronbek Reyimbaev",
        link: "https://wa.me/+99871380881",
      },
    ],
  });
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [emailResult, emailSetResult] = useState("");
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const sendEmail = async (e, lngObj) => {
    e.preventDefault();
    emailSetResult(t(lngObj.formSpanSend));
    const formData = new FormData(e.target);
    formData.append("access_key", "7b5d61c7-68fa-4fb3-956e-27668a1a72b4");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      emailSetResult(t(lngObj.formSpanSuccess));
      e.target.reset();
    } else {
      emailSetResult(data.message);
    }
  };
  useEffect(() => {
    if (!theme) localStorage.setItem("theme", JSON.stringify("light"));
  }, []);

  return (
    <AppContext.Provider
      value={{
        navbar,
        setNavbar,
        home,
        setHome,
        about,
        setAbout,
        projects,
        setProjects,
        contact,
        setContact,
        theme,
        setTheme,
        isMenuOpen,
        setIsMenuOpen,
        isDropdownOpen,
        setIsDropdownOpen,
        language,
        setLanguage,
        i18n,
        t,
        emailResult,
        emailSetResult,
        sendEmail,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
