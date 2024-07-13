import { useContext, useState } from "react";
import ContactLink from "../components/ContactLink.jsx";
import clsx from "clsx";
import { AppContext } from "../context/appContext.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  const { contact, theme, t } = useContext(AppContext);
  const contactT = t("contact", { returnObjects: true });
  const [result, setResult] = useState("");
  const contactAddressText = clsx("contact__address-text", {
    "dark-text": theme === "dark",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(t(contactT.formSpanSend));
    const formData = new FormData(e.target);
    console.log(formData);
    formData.append("access_key", "7b5d61c7-68fa-4fb3-956e-27668a1a72b4");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      setResult(t(contactT.formSpanSuccess));
      e.target.reset();
    } else {
      console.log(t(contactT.formSpanError), data);
      setResult(data.message);
    }
  };

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
          <form className="contact__form" onSubmit={handleSubmit}>
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
            <span className="contact__form-span">{result}</span>
            <button className="contact__form-btn">{t(contactT.formBtn)}</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
