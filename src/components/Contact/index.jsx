import "./style.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (isFormValid) {
      emailjs
        .sendForm(
          "service_baudbmf",
          "template_f9wupd2",
          form.current,
          "ow3HFHwxLe29SiH-1"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessage("Email sent successfully!");
          },
          (error) => {
            console.log(error.text);
            setMessage("Error sending email. Please try again later.");
          }
        );
    } else {
      setMessage("Please fill in all required fields.");
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    validateForm();
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };
  const handleMessageTextChange = (e) => {
    setMessageText(e.target.value);
    validateForm();
  };
  const validateForm = () => {

    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      messageText.trim() !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="contact-body" id="contact">
    <div className="contact-header">
    <h1 className="contact-title">Contact Us</h1>
    </div>
    <div className="block">
      <div className="centred-section">
        <div className="section-containers">
          <div className="header">
            <h1 className="title">Address</h1>
          </div>
          <div className="bg"></div>
          <div className="contact-container">
            <div className="contact">
              <div className="contact-info">
                <img src="images/location.png" alt="Location" className="icon1"/>
                <p>Nairobi, Kenya</p>
              </div>
              <div className="contact-info">
                <img src="images/mail.png" alt="Email" className="icon2" />
                <p>info.etaka@gmail.com</p>
              </div>
              <div className="contact-info">
                <img src="images/phone.png" alt="Phone" className="icon3" />
                <p>+254 710 515 773</p>
              </div>
            </div>
            {message && <p className="message">{message}</p>}
            <form ref={form} onSubmit={sendEmail} className="message-container">
              <h2 className="send-message">Send a message</h2>
              <div className="contact-input">
                <div>
                  <input type="text" placeholder="Name" id="input"  value={name} onChange={handleNameChange} required/>
                  <input type="email" placeholder="Email address" id="input" value={email}  onChange={handleEmailChange} required/>
                  <textarea placeholder="Message" id="input3"  value={messageText} onChange={handleMessageTextChange} required></textarea>
                  <button className={`btn ${clicked ? 'clicked' : ''}`} onClick={() => setClicked(true)}>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default Contact;