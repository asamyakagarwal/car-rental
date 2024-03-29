import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { IconLocation } from "@tabler/icons-react";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {

  const form = useRef() ;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7k58x1w', 'template_i9hzzwj', form.current, 'lbO3SvpNqfeVuLEeA')
    
    e.target.reset() ;
      
  };


  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; (+91) 9873468486
              </a>
              <a href="/">
                <IconMail /> &nbsp; carrental@carmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Rajasthan , INDIA
              </a>
            </div>
            <div className="contact-div__form">
               <form ref={form} onSubmit={sendEmail}>
                <label >
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Samyak Agarwal"' name="full_name"></input>

                <label >
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com" name="email" ></input>

                <label >
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.." name="message"></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(+91) 9999999999</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
