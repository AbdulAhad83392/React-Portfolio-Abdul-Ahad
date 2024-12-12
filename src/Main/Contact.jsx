import React from 'react'

export default function Contact() {
  return (
    <div>
      <h3>Contact</h3>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27810.234415132723!2d71.70293759999998!3d29.391384449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727864428865!5m2!1sen!2s"
        style={{ width: '600', height: '450' }}

        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <input className='input' type="text" placeholder='ahad83392@gmail.com' /><br />
      <input className='input' type="text" placeholder='03063618697' /><br />
      <input className='input' type="text" placeholder='Bahawalpur' /><br />
      <input className='input' type="text" placeholder='Pakistan' /><br />

      <button className='bvn'>Submit</button>
      <br /><br /><br />

    </div>
  )
}
