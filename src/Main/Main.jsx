import React from 'react'
import Navv from './Navv'
import First from './First'
import About from './About'
import Uiux from './Uiux'
import Skill from './Skill'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Services from './Services'
import Testimnial from './Testimnial'
import Contact from './Contact'
// import { Link } from 'react-router-dom'




export default function Main() {
    return (
        <div>

            <div className="main">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-3 mdd">
                            <img className='imm' src="" alt="" />

                            <Navv />

                        </div>

                        <div className="col-md-9 mdcol">

                            <First />

                            <About />

                            <Uiux />

                            <Skill />

                            <Resume />

                            <Portfolio />

                            <Services />

                            <Testimnial />

                            <Contact />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
