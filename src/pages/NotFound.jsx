import { useContext } from "react";
import { AppContext } from "../context/appContext";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <NavBar />
      <div className="notfound" data-theme={theme}>
        <div className="container notfound__wrap">
          <h1 className="notfound__title">404 Error</h1>
          <h2 className="notfound__subtitle">
            Sorry, I can’t find what you’re looking for.
          </h2>
          <p className="notfound__text">
            If you think this is an error on my part, please&nbsp;
            <a className="notfound__text-link" href="https://g.co/kgs/yaSxgYn">
              email me.
            </a>
          </p>
          <a href="/" className="notfound__link">
            Go Home
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
