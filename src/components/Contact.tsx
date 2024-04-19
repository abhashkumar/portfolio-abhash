import React, {useState} from 'react';
import '../Styles/Contact.css'; // Import CSS for interests animation
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane } from 'react-icons/fa';
import contactUs from '../assets/ContactUsjpeg-removebg-preview.png';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email,phone,  message } = formData;
    const mailtoLink = `mailto:abhashmaddi@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0APhone:${phone}%0D%0AEmail : ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <h2><FaPhone />Get In Touch</h2>
      <div className='contact-Us-Container'>
      <div className='left-contact'>
      <img src={contactUs} alt="Contact-Us" className="contact-us" />
      </div>
      <div className='right-contact'>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required onChange={handleChange} placeholder="Name" />
        <FaUser className="contact-icon" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required onChange={handleChange} placeholder="Email"/>
        <FaEnvelope className="contact-icon" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" onChange={handleChange} placeholder="Phone" />
        <FaPhone className="contact-icon" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required onChange={handleChange} placeholder="Message"></textarea>
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
