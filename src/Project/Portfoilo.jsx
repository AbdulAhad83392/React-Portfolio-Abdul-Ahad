import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineMoveToInbox } from "react-icons/md";

export default function Portfoilo() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="portbackground" style={{ color: 'white' }}>
            <h1 className="text-warning text-center" data-aos="fade-up-right">About Me</h1>
            <h2 className="text-center" data-aos="fade-up-right">Personal Infos</h2>

            <div className="container">
                <div className="row mb-5" data-aos="fade-up-right">
                    <div className="col-12 col-md-6 mb-3">
                        <b>
                            <p>First Name: Abdul</p>
                            <p>Age: 19</p>
                            <p>Freelancer: Available</p>
                            <p>Phone: +92 301 3618697</p>
                            <p>Skype: Abdul Ahad</p>
                        </b>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <b>
                            <p>Last Name: Ahad</p>
                            <p>Nationality: Pakistan</p>
                            <p>Address: Bahawalpur</p>
                            <p>Email: ahad83392@gmail.com</p>
                            <p>Languages: Urdu, English</p>
                        </b>
                    </div>
                </div>

                {/* Experience Section */}
                <h2 className="text-center" data-aos="fade-up-right">Experience</h2>
                <div className="row text-center mb-5">
                    {[
                        { title: "01+", subtitle: "Year of Experience" },
                        { title: "04", subtitle: "Projects Completed" },
                        { title: "All", subtitle: "Customers Happy" },
                        { title: "No", subtitle: "Awards Granted" },
                    ].map((box, index) => (
                        <div className="col-12 col-md-3 mb-4" key={index} data-aos="fade-up-right">
                            <div className="box">
                                <h1 className="text-warning">{box.title}</h1>
                                <h4>{box.subtitle}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                {/* My Skills Section */}
                <h2 className="text-center" data-aos="fade-up-right">My Skills</h2>
                <div className="row mb-5">
                    {[
                        { skill: "HTML", percentage: "90%", color: "#ff6f00" },
                        { skill: "CSS", percentage: "80%", color: "#ff6f00" },
                        { skill: "Bootstrap", percentage: "78%", color: "#ff6f00" },
                        { skill: "React", percentage: "50%", color: "#ff6f00" },
                    ].map((skill, index) => (
                        <div className="col-12 col-sm-6 col-md-3 text-center mb-4" key={index}>
                            <div className="circle" style={{
                                position: 'relative',
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                background: `conic-gradient(${skill.color} calc(${skill.percentage.slice(0, -1)} * 1%), #333 calc(100 * 1%))`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '10px',
                                    left: '10px',
                                    right: '10px',
                                    bottom: '10px',
                                    backgroundColor: '#1f1f1f',
                                    borderRadius: '50%',
                                    zIndex: 1,
                                }}></div>
                                <div style={{
                                    fontSize: '28px',
                                    color: 'white',
                                    zIndex: 2,
                                }}>{skill.percentage}</div>
                            </div>
                            <div className="label" style={{ color: 'white' }}>{skill.skill}</div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <h2 className="text-center" data-aos="fade-up-right">Education and Experience</h2>
                <div className="row mb-5">
                    {[
                        { title: "Matric", description: "Got 97% (Done in 2019-20)" },
                        { title: "Intermediate", description: "Got 80% (Done in 2021-22)" },
                        { title: "BS in Artificial Intelligence", description: "Continue in semester 3rd (2023-27)" },
                        { title: "Web Development", description: "Done approximately Front end development" },
                    ].map((edu, index) => (
                        <div className="col-12 col-md-6 mb-4 text-center" key={index}>
                            <MdOutlineMoveToInbox className='inbox' />
                            <h3>{edu.title}</h3>
                            <h5>{edu.description}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
