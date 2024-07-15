import { useContext } from "react";
import ContactLink from "../components/ContactLink.jsx";
import clsx from "clsx";
import { AppContext } from "../context/appContext.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  const { contact, theme, t, emailResult, sendEmail } = useContext(AppContext);
  const contactT = t("contact", { returnObjects: true });
  const contactAddressText = clsx("contact__address-text", {
    "dark-text": theme === "dark",
  });

  return (
    <>
      <NavBar />
      <div id="contact" className="contact" data-theme={theme}>
        <div className="container contact__wrap">
          <address className="contact__address">
            <h2 className="contact__address-title title">
              {t(contactT.mainTitle)}
            </h2>
            <p className={contactAddressText}>{t(contactT.mainText)}</p>
            <div className="contact__address-socials">
              {contact.links?.map((link) => (
                <ContactLink link={link} key={link.id} />
              ))}
            </div>
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
              name="name"
              required
              type="text"
            />
            <label className="contact__form-label">
              {t(contactT.formLabelEmail)}
            </label>
            <input
              className="contact__form-input"
              type="email"
              name="email"
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
            <button className="contact__form-btn">{t(contactT.formBtn)}</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
