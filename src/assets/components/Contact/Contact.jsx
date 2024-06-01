import "./Contact.css";
import { useState } from "react";
import ContactLink from "./ContactLink.jsx";

const Contact = ({ contact }) => {
  const [result, setResult] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);
    console.log(formData);
    formData.append("access_key", "7b5d61c7-68fa-4fb3-956e-27668a1a72b4");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      setResult("Form submitted successfully");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="container contact__wrap">
        <div className="contact__main">
          <p className="contact__main-tag tag">Contact</p>
          <h2 className="contact__main-title title">Send me a message 📧</h2>
          <p className="contact__main-text">
            Feel free to reach out through social media app, email or contact
            form below.
          </p>
          <div className="contact__main-socials">
            {contact.links?.map((link) => (
              <ContactLink link={link} key={link.id} />
            ))}
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label className="contact__form-label">Your name</label>
          <input
            className="contact__form-input"
            name="name"
            required
            type="text"
          />
          <label className="contact__form-label">Email</label>
          <input
            className="contact__form-input"
            type="email"
            name="email"
            required
          />
          <label className="contact__form-label">Message</label>
          <textarea
            className="contact__form-textarea"
            rows={5}
            placeholder="Type your message here"
            name="message"
            required
          ></textarea>
          <span className="contact__form-span">{result}</span>
          <button className="contact__form-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
