import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiInstagramLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t1mya93', 'template_91kpj2i', form.current, 'bgyndUuhv7nN-A8E0')

    e.target.reset();

  };

  return (
    <section id='contact'>

      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>youremail@email.com</h5>
            <a href="mailto:youremail@email.com" target="_blank">Send an Email</a>
          </article>

          <article className='contact__option'>
            <RiInstagramLine className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>Your Instagram Id</h5>
            <a href="https://instagramid" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone+9112333334568" target="_blank">Send a Message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name="name" id="" placeholder='Your Full Name' required />
          <input type="email" name="email" id="" placeholder='Your Email' required />

          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>


    </section>
  )
}

export default Contact