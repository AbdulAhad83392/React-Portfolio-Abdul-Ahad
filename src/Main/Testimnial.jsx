import React from 'react'
import img1 from './Media/1.jpg'
import img2 from './Media/2.jpg'
import img3 from './Media/3.jpg'

export default function Testimnial() {
  return (
    <div>
      <br /><br />
      <h3 style={{ width: '16%', borderBottom: '2px solid blue' }}>Testimonials</h3>

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

    </div>
  )
}
