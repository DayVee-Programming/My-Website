import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const ContactLink = ({ link }) => {
  const { theme } = useContext(AppContext);
  const contactAddressSocialsLink = clsx("contact__address-socials-link-top-img", {
    light: theme === "dark",
  });

  return (
    <a
      href={link.link}
      target="_blank"
      className="contact__address-socials-link"
    >
      <div className="contact__address-socials-link-top">
        <img className={contactAddressSocialsLink} src={link.value} alt="" />
        <span className="contact__address-socials-link-top-span">
          {link.appName}
        </span>
      </div>
      <span className="contact__address-socials-link-text">{link.text}</span>
    </a>
  );
};

export default ContactLink;
