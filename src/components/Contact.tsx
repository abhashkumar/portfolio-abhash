import React from 'react';
import '../Styles/Contact.css'; // Import CSS for interests animation
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane } from 'react-icons/fa';
import contactUs from '../assets/ContactUsjpeg-removebg-preview.png';


const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2><FaPhone />Get In Touch</h2>
      <div className='contact-Us-Container'>
      <div className='left-contact'>
      <img src={contactUs} alt="Contact-Us" className="contact-us" />
      </div>
      <div className='right-contact'>
      <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <FaUser className="contact-icon" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <FaEnvelope className="contact-icon" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />
        <FaPhone className="contact-icon" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required></textarea>
        <FaComment className="contact-icon" />
      </div>
      <button type="submit"><FaPaperPlane /> Submit</button>
    </form>
    </div>
    </div>
    </section>
  );
};

export default Contact;
