import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineMoveToInbox } from "react-icons/md";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">About Me and Portfolio</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#123', color: 'white' }}>
        <h1 className="text-center text-warning">About Me</h1>
        <h2 className="text-center">Personal Infos</h2>
        <div className="row text-white">
          <div className="col-12 col-md-6 mb-3">
            <p><b>First Name:</b> Abdul</p>
            <p><b>Age:</b> 19</p>
            <p><b>Freelancer:</b> Available</p>
            <p><b>Phone:</b> +92 301 3618697</p>
            <p><b>Skype:</b> Abdul Ahad</p>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <p><b>Last Name:</b> Ahad</p>
            <p><b>Nationality:</b> Pakistan</p>
            <p><b>Address:</b> Bahawalpur</p>
            <p><b>Email:</b> ahad83392@gmail.com</p>
            <p><b>Languages:</b> Urdu, English</p>
          </div>
        </div>

        <h2 className="text-center">Experience</h2>
        <div className="row text-center">
          {['04+', '00', 'No', 'No'].map((exp, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <h3 className="text-warning">{exp}</h3>
              <p>{['Months of Experience', 'Projects Completed', 'Customers Happy', 'Awards Granted'][index]}</p>
            </div>
          ))}
        </div>

        <h2 className="text-center">My Skills</h2>
        <div className="row justify-content-center">
          {['HTML', 'CSS', 'Bootstrap', 'React'].map((skill, index) => (
            <div className="col-6 col-md-3 text-center mb-4" key={index}>
              <div className="circle" style={{
                position: 'relative',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: `conic-gradient(#ff6f00 ${[90, 80, 78, 50][index]}%, #333 ${[10, 20, 22, 50][index]}%)`
              }}></div>
              <div className="mt-2 text-white">{skill}</div>
            </div>
          ))}
        </div>

        <h2 className="text-center">Education and Experience</h2>
        <div className="row text-center text-white">
          {['Matric', 'Intermidiate', 'BS in Artificial Intelligence', 'Web Development'].map((edu, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
              <MdOutlineMoveToInbox />
              <h3>{edu}</h3>
              <p dangerouslySetInnerHTML={{ __html: ['Got 97% <br /> Done in 2019-20', 'Got 80% <br /> Done in 2021-22', 'Continue in semester 3rd <br /> 2023-27', 'Done approximately <br /> Front end development'][index]} } />
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <div className="main">
        <div className="a">
          <div className="b" data-aos="fade-up-right"></div>
          <div className="c" data-aos="fade-up-right">
            <h1 className="text-warning">--Hi I'm Abdul Ahad <br />Your Web designer</h1>
            <p className="text-whitesmoke">
              Hi..... <br /> Meet here u'r Web developer, check my portfolio. Read my skills and experience and study... <br />Thanks.... <br /> Regards: Abdul Ahad
            </p>
            <button className='btn12' onClick={() => setModalShow(true)}>
              Read More
              <div className="btn121"><FaAngleDoubleRight /></div>
            </button>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
