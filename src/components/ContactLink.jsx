const ContactLink = ({ link }) => {
  return (
    <a href={link.link} target="_blank" className="contact__main-socials-link">
      <div className="contact__main-socials-link-top">
        <img
          className="contact__main-socials-link-top-img"
          src={link.value}
          alt=""
        />
        <span className="contact__main-socials-link-top-span">
          {link.appName}
        </span>
      </div>
      <span className="contact__main-socials-link-text">{link.text}</span>
    </a>
  );
};

export default ContactLink;
