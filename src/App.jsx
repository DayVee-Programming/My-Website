import { useEffect, useState } from "react";
import { images } from "./utils/images.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { AppContext } from "./context/appContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
        value: images.gitlabIcon,
        link: "https://gitlab.com/DayVee",
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
        info: "HTML",
      },
      {
        id: v4(),
        value: images.cssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        info: "CSS",
      },
      {
        id: v4(),
        value: images.jsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        info: "JavaScript",
      },
      {
        id: v4(),
        value: images.typescriptIcon,
        link: "https://www.typescriptlang.org/",
        info: "TypeScript",
      },
      {
        id: v4(),
        value: images.vueIcon,
        link: "https://vuejs.org/",
        info: "Vue.js",
      },
      {
        id: v4(),
        value: images.reactIcon,
        link: "https://react.dev/",
        info: "React",
      },
      {
        id: v4(),
        value: images.sassIcon,
        link: "https://sass-lang.com/",
        info: "Sass",
      },
      {
        id: v4(),
        value: images.bootstrapIcon,
        link: "https://getbootstrap.com/",
        info: "Bootstrap",
      },
      {
        id: v4(),
        value: images.tailwindIcon,
        link: "https://tailwindcss.com/",
        info: "Tailwind CSS",
      },
    ],
    toolsLinks: [
      {
        id: v4(),
        value: images.viteIcon,
        link: "https://vitejs.dev/",
        info: "Vite",
      },
      {
        id: v4(),
        value: images.postmanIcon,
        link: "https://www.postman.com/",
        info: "Postman",
      },
      {
        id: v4(),
        value: images.npmIcon,
        link: "https://www.npmjs.com/",
        info: "npm",
      },
      {
        id: v4(),
        value: images.pnpmIcon,
        link: "https://pnpm.io/",
        info: "pnpm",
      },
      {
        id: v4(),
        value: images.gitIcon,
        link: "https://www.git-scm.com/",
        info: "Git",
      },
      {
        id: v4(),
        value: images.reduxIcon,
        link: "https://redux-toolkit.js.org/",
        info: "Redux Toolkit",
      },
      {
        id: v4(),
        value: images.antDesignIcon,
        link: "https://ant.design/",
        info: "Ant Design",
      },
      {
        id: v4(),
        value: images.chartJsIcon,
        link: "https://www.chartjs.org/",
        info: "Chart.js",
      },
      {
        id: v4(),
        value: images.html2PdfJsIcon,
        link: "https://ekoopmans.github.io/html2pdf.js/",
        info: "html2pdf.js",
      },
    ],
    designerStackLinks: [
      {
        id: v4(),
        value: images.figmaIcon,
        link: "https://www.figma.com/",
        info: "Figma",
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
        title: "Dummy Shop 🛒",
        list: [
          { id: v4(), value: "React" },
          { id: v4(), value: "SASS" },
        ],
        liveLink: "https://dummy-shop-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Dummy-Shop",
        images: [
          { id: v4(), value: images.dummyShop1 },
          { id: v4(), value: images.dummyShop2 },
          { id: v4(), value: images.dummyShop3 },
        ],
      },
      {
        id: v4(),
        title: "Gitpod 💻",
        list: [
          { id: v4(), value: "React" },
          { id: v4(), value: "SASS" },
        ],
        liveLink: "https://gitpod-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Gitpod",
        images: [
          { id: v4(), value: images.gitpod1 },
          { id: v4(), value: images.gitpod2 },
          { id: v4(), value: images.gitpod3 },
        ],
      },
      {
        id: v4(),
        title: "CrypAppy 💰",
        list: [
          { id: v4(), value: "Vue.js" },
          { id: v4(), value: "CSS" },
        ],
        liveLink: "https://crypappy-web.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/CrypAppy",
        images: [
          { id: v4(), value: images.crypAppy1 },
          { id: v4(), value: images.crypAppy2 },
          { id: v4(), value: images.crypAppy3 },
        ],
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
        images: [
          { id: v4(), value: images.zone1 },
          { id: v4(), value: images.zone2 },
          { id: v4(), value: images.zone3 },
        ],
      },
      {
        id: v4(),
        title: "BlueCollar 👷",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
          { id: v4(), value: "JS" },
        ],
        liveLink: "https://blue-collar-webs.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Blue-Collar",
        images: [
          { id: v4(), value: images.blueCollar1 },
          { id: v4(), value: images.blueCollar2 },
          { id: v4(), value: images.blueCollar3 },
          { id: v4(), value: images.blueCollar4 },
        ],
      },
      {
        id: v4(),
        title: "Antools 🛠️",
        list: [
          { id: v4(), value: "HTML" },
          { id: v4(), value: "CSS" },
          { id: v4(), value: "JS" },
        ],
        liveLink: "https://antools-webs.netlify.app/",
        codeLink: "https://github.com/DayVee-Programming/Antools",
        images: [
          { id: v4(), value: images.antools1 },
          { id: v4(), value: images.antools2 },
          { id: v4(), value: images.antools3 },
        ],
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
        link: "mailto:davronbek4business@gmail.com",
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  const sendEmail = async (e, lngObj) => {
    e.preventDefault();
    setEmailResult(t(lngObj.formSpanSend));
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
  theme === "light"
    ? document.body.classList.remove("active")
    : document.body.classList.add("active");

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
        <RouterProvider router={router} />
      )}
    </AppContext.Provider>
  );
};

export default App;
