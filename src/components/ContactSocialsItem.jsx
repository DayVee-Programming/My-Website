import { useContext } from "react";
import { AppContext } from "../context/appContext";
import clsx from "clsx";

const ContactSocialsItem = ({ link }) => {
  const { theme } = useContext(AppContext);
  const contactAddressSocialsItemLinkImg = clsx(
    "contact__address-socials-link-top-img",
    {
      light: theme === "dark",
    }
  );

  return (
    <li className="contact__address-socials-item">
      <a
        href={link.link}
        target="_blank"
        className="contact__address-socials-item-link"
      >
        <div className="contact__address-socials-item-link-top">
          <img
            className={contactAddressSocialsItemLinkImg}
            src={link.value}
            alt=""
          />
          <span className="contact__address-socials-item-link-top-span">
            {link.appName}
          </span>
        </div>
        <span className="contact__address-socials-item-link-text">
          {link.text}
        </span>
      </a>
    </li>
  );
};

export default ContactSocialsItem;
