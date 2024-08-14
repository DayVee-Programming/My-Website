import { useContext } from "react";
import ContactSocialsItem from "../components/ContactSocialsItem.jsx";
import clsx from "clsx";
import { AppContext } from "../context/appContext.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  const { contact, theme, t, emailResult, sendEmail } = useContext(AppContext);
  const contactT = t("contact", { returnObjects: true });
  const addressTextS = clsx("contact__address-text", {
    "dark-text": theme === "dark",
  });

  return (
    <>
      <NavBar />
      <div id="contact" className="contact" data-theme={theme}>
        <div className="container contact__wrapper">
          <address className="contact__address">
            <h2 className="contact__address-title title">
              {t(contactT.mainTitle)}
            </h2>
            <p className={addressTextS}>{t(contactT.mainText)}</p>
            <ul className="contact__address-socials">
              {contact.socialsLinks?.map((link) => (
                <ContactSocialsItem link={link} key={link.id} />
              ))}
            </ul>
          </address>
          <form
            className="contact__form"
            onSubmit={(e) => sendEmail(e, contactT)}
          >
            <label className="contact__form-label">
              {t(contactT.formLabelName)}
            </label>
            <input
              className="contact__form-input"
              name="user_name"
              required
              type="text"
            />
            <label className="contact__form-label">
              {t(contactT.formLabelEmail)}
            </label>
            <input
              className="contact__form-input"
              type="email"
              name="user_email"
              required
            />
            <label className="contact__form-label">
              {t(contactT.formLabelMessage)}
            </label>
            <textarea
              className="contact__form-textarea"
              rows={5}
              placeholder={t(contactT.formTextarea)}
              name="message"
              required
            ></textarea>
            <span className="contact__form-span">{emailResult}</span>
            <button className="contact__form-btn" value="Send">
              {t(contactT.formBtn)}
            </button>
          </form>
        </div>
        <div className="bg-el first"></div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
