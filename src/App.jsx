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
import { v4 } from "uuid";
import { GridLoader } from "react-spinners";
import emailjs from "@emailjs/browser";

const App = () => {
  const [navbar, setNavbar] = useState({
    navLinks: [
      {
        id: v4(),
        path: "/about",
      },
      {
        id: v4(),
        path: "/projects",
      },
      {
        id: v4(),
        path: "/contact",
      },
    ],
  });
  const [home, setHome] = useState({
    profileLinks: [
      {
        id: v4(),
        value: images.githubIcon,
        link: "https://github.com/DayVee-Programming",
      },
      {
        id: v4(),
        value: images.linkedInIcon,
        link: "https://www.linkedin.com/in/dayvee-programming-7b7664228/",
      },
    ],
  });
  const [about, setAbout] = useState({
    stackLinks: [
      {
        id: v4(),
        value: images.htmlIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        id: v4(),
        value: images.cssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        id: v4(),
        value: images.jsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        id: v4(),
        value: images.typescriptIcon,
        link: "https://www.typescriptlang.org/",
      },
      {
        id: v4(),
        value: images.reactIcon,
        link: "https://react.dev/",
      },
      {
        id: v4(),
        value: images.sassIcon,
        link: "https://sass-lang.com/",
      },
    ],
    toolsLinks: [
      {
        id: v4(),
        value: images.viteIcon,
        link: "https://vitejs.dev/",
      },
      {
        id: v4(),
        value: images.figmaIcon,
        link: "https://www.figma.com/",
      },
      {
        id: v4(),
        value: images.npmIcon,
        link: "https://www.npmjs.com/",
      },
      {
        id: v4(),
        value: images.gitIcon,
        link: "https://www.git-scm.com/",
      },
      {
        id: v4(),
        value: images.bemIcon,
        link: "https://en.bem.info/methodology/",
      },
    ],
    interestsLinks: [
      {
        id: v4(),
        value: images.videoGamesIcon,
        link: `https://en.wikipedia.org/wiki/Video_game`,
      },
      {
        id: v4(),
        value: images.chessIcon,
        link: `https://en.wikipedia.org/wiki/Chess`,
      },
      {
        id: v4(),
        value: images.cardGamesIcon,
        link: `https://en.wikipedia.org/wiki/Card_game`,
      },
    ],
  });
  const [projects, setProjects] = useState({
    cards: [
      {
        id: v4(),
        title: "Gitpod 💻",
        list: [
          { id: v4(), value: "React" },
          { id: v4(), value: "SASS" },
        ],
        liveLink: "https://gitpod-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Gitpod",
        image: images.gitpod,
      },
      {
        id: v4(),
        title: "Zone 🎥",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
          { id: v4(), value: "JS" },
        ],
        liveLink: "https://zone-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Zone",
        image: images.zone,
      },
      {
        id: v4(),
        title: "BlueCollar 👷",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
        ],
        liveLink: "https://blue-collar-webs.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Blue-Collar",
        image: images.blueCollar,
      },
      {
        id: v4(),
        title: "Antools 🛠️",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
        ],
        liveLink: "https://antools-webs.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Antools",
        image: images.antools,
      },
      {
        id: v4(),
        title: "CrypAppy 💰",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
        ],
        liveLink: "https://crypappy-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/CrypAppy",
        image: images.crypAppy,
      },
      {
        id: v4(),
        title: "Nike 👟",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
        ],
        liveLink: "https://nike-big-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Nike-Big",
        image: images.nike,
      },
      {
        id: v4(),
        title: "Soundtrack 🎧",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
        ],
        liveLink: "https://soundtrack-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Soundtrack",
        image: images.soundtrack,
      },
      {
        id: v4(),
        title: "Pokemon Fighter 🃏",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
          { id: v4(), value: "JS" },
        ],
        liveLink: "https://pokemon-fighter-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Pokemon-Fighter",
        image: images.pokemon,
      },
      {
        id: v4(),
        title: "Simon 👨‍🔬",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
          { id: v4(), value: "JS" },
        ],
        liveLink: "https://simon-game-webs.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Simon-Game",
        image: images.simon,
      },
    ],
  });
  const [contact, setContact] = useState({
    socialsLinks: [
      {
        id: v4(),
        value: images.telegramIcon,
        appName: "Telegram:",
        text: "@Davron1702",
        link: "https://t.me/Davron1702",
      },
      {
        id: v4(),
        value: images.gmailIcon,
        appName: "Email:",
        text: "davronbek4business@gmail.com",
        link: "https://g.co/kgs/yaSxgYn",
      },
      {
        id: v4(),
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
  const [emailResult, setEmailResult] = useState();
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e, lngObj) => {
    e.preventDefault();
    setEmailResult(t(lngObj.formSpanSend))
    emailjs
      .sendForm("service_af0pld9", "template_tl1wbb5", e.target, {
        publicKey: "90nxu5zDRtHNocL71",
      })
      .then(
        () => {
          setEmailResult(t(lngObj.formSpanSuccess));
        },
        () => {
          setEmailResult(t(lngObj.formSpanError));
        }
      );
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
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
        setEmailResult,
        sendEmail,
        v4,
      }}
    >
      {loading ? (
        <div className="loader" data-theme={theme}>
          <GridLoader
            className="gridloader"
            color={"#7171f0"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
      )}
    </AppContext.Provider>
  );
};

export default App;
