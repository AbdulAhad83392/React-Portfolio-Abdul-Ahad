import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdContactEmergency } from "react-icons/md";
export default function Contact() {
  return (
    <div> <br /> <br />
      <h1 style={{ textAlign: 'center', color: 'white' }}>GET IN TOUCH</h1>

      <div className="con">
        <label htmlFor="">
          <div className="i">
            <input className='inp' type="text" placeholder='Enter your name....' />
            <input className='inp' type="email" placeholder='Enter your Email Adresss....' />
            <input className='inp' type="text" placeholder='Subject for this message....' />
          </div>
          
        </label>
        <iframe 
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6844.397207096998!2d71.6640881454102!3d29.382758505467358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1729274278185!5m2!1sen!2s" 
  width="600" 
  height="450" 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade" 
  title="Google Maps Location"
>
</iframe>

      </div>
      <br />
      <br />
      <div className="map">
        <div className="m"><h3 className='hqw'>Name : Abdul Ahad</h3>
          <h4 className='hqw'>Find me : ahad83392@gmail.com</h4>
          <h4 className='hqw'>Contact: +92 306 3618697</h4>
          <h4 className='hqw'>Adress: Bahawalpur Officer Colony Dubai chowk</h4></div>
        <div className="n">




          <a style={{ marginRight: '1rem' }} href="https://www.facebook.com/profile.php?id=100082899504894"><FaFacebook /></a>
          <a style={{ marginRight: '1rem' }} href="https://mail.google.com/mail/u/0/#inbox"><SiGmail />
          </a>

          <a style={{ marginRight: '1rem' }} href="https://contacts.google.com/new"><MdContactEmergency />
          </a>

        </div> <br /> <br />

      </div>






      <br /> <br />
      <br />
      <button className='btn1w' style={{ textAlign: 'center' }}>Send Message <FaTelegram className='tele' />
      </button>
      <br /><br />

    </div>
  )
}
