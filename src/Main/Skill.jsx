import React from 'react'

export default function Skill() {
    return (
        <div>

            <h1>Skill</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio tempora dolores quibusdam ipsa perspiciatis, pariat
            <br />

            <h3>Java</h3> <br />
            <div class="progress">
                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>

            <br />
            <h3>React</h3><br />
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
            <br />

            <h3>HTml</h3><br />
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
            </div>
            <br />
            <h3>CSS</h3><br />
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>

        </div>
    )
}
