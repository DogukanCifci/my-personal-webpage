import { useState } from "react";
import { images } from "../../constants";
import { AddMessages } from "../../helpers/functions";
import { AppWrap } from "../../wrapper";
import "./Footer.scss";

///'##################-------- BASLANGIC '##################--------////

const Footer = () => {
  //Form kisminda olusturdugumuz degisknlerin olusturulmasi
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Gönderilen mesajin gönderilme tarihini de almak icin kullandik
  const date = new Date().toLocaleDateString("de-DE");

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  //Destructing

  //Events
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: name,
      email: email,
      message: message,
      date: date,
    };
    AddMessages(formData);
    setIsFormSubmitted(true);
  };
  //Kontrol Amacli yazildi
  /*  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Message ", message); */
  return (
    <div className="footer-container">
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:n.dogukancifci@gmail.com" className="p-text">
            n.dogukancifci@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +49 (176) 63425770" className="p-text">
            +49 (176) 634 25770
          </a>
        </div>
      </div>

      {/* Kullanicinin admine mesaj göndermesi icin olusturulan form kismi */}
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="button p-text">
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text last-message">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};
export default AppWrap(Footer, "contact");
