import React from 'react'

export default function Portfolio() {
    return (
        <div>
            <br /><br />
            <h2 style={{ borderBottom: '2px solid blue', width: '14%' }}>Portfolio:</h2>

            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nobis quia saepe dignissimos labore optio voluptate deleniti architecto, vel facere! Lorem ipsum dolor sit amet consectetur adipisicing elit.

            <br /><br /><br />
            <div className="npm">
                <button className='btt'>All</button>
                <button className='btt'>Products</button>
                <button className='btt'>About</button>
                <button className='btt'>App</button>
                <button className='btt'>Services</button>
            </div>

            <br /><br /><br />
            <div className="container-fluid">

                <div className="row qwa">
                    <div className="col-md-4 a1"></div>
                    <div className="col-md-4 a2"></div>
                    <div className="col-md-4 a3"></div>
                </div>
                <div className="row qwa">
                    <div className="col-md-4 a1"></div>
                    <div className="col-md-4 a2"></div>
                    <div className="col-md-4 a3"></div>
                </div>
                <div className="row qwa">
                    <div className="col-md-4 a1"></div>
                    <div className="col-md-4 a2"></div>
                    <div className="col-md-4 a3"></div>
                </div>
            </div>



        </div>
    )
}
