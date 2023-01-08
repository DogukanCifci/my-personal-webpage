import { useState } from "react";
import { images } from "../../constants";
import { AddMessages } from "../../helpers/functions";
// import { AppWrap } from "../../wrapper";
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
  const handleSubmit = () => {
    setLoading(true);
    const formData = {
      name: name,
      email: email,
      message: message,
      date: date,
    };
    AddMessages(formData);
  };
  //Kontrol Amacli yazildi
  /*  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Message ", message); */
  return (
    <>
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
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            className="p-text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            className="p-text"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? "Sending" : "Send Message"}
        </button>
      </div>
    </>
  );
};
export default Footer;
