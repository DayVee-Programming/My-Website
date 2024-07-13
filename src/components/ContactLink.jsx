const ContactLink = ({ link }) => {
  return (
    <a href={link.link} target="_blank" className="contact__address-socials-link">
      <div className="contact__address-socials-link-top">
        <img
          className="contact__address-socials-link-top-img"
          src={link.value}
          alt=""
        />
        <span className="contact__address-socials-link-top-span">
          {link.appName}
        </span>
      </div>
      <span className="contact__address-socials-link-text">{link.text}</span>
    </a>
  );
};

export default ContactLink;
