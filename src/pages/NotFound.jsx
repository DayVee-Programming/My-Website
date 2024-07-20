import { useContext } from "react";
import { AppContext } from "../context/appContext";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { theme, t } = useContext(AppContext);
  const notfoundT = t("notfound", { returnObjects: true });

  return (
    <>
      <NavBar />
      <div className="notfound" data-theme={theme}>
        <div className="container notfound__wrap">
          <h1 className="notfound__title">{t(notfoundT.title)}</h1>
          <h2 className="notfound__subtitle">{t(notfoundT.subtitle)}</h2>
          <p className="notfound__text">
            {t(notfoundT.text1)}&nbsp;
            <a className="notfound__text-link" href="https://g.co/kgs/yaSxgYn">
              {t(notfoundT.text2)}
            </a>
          </p>
          <Link className="notfound__link" to="/">
            {t(notfoundT.link)}
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
