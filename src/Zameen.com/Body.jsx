import React, { useState } from 'react';

export default function Body() {
  const [color, setColor] = useState('transparent'); // Initial background color
  const [textColor, setTextColor] = useState('white'); // Initial text color

  // Function to handle color change of the first button
  const change = () => {
    setColor('white'); // Change background to white
    setTextColor('black'); // Change text color to black
  };

  return (
    <>
      <div className='body'>
        <br /><br /><br />
        <h3 style={{ textAlign: 'center', color: 'white' }}>Search for properties</h3>
        <div className="botn">
          <button
            onClick={change}
            className='btn1'
            type="submit"
            style={{ backgroundColor: color, color: textColor }}
          >
            Buy
          </button>
          <button onClick={change} className='btn1' type="button">Rent</button>

          <a href="https://www.zameen.com/new-projects/">          <button className='btn1' type="button">Projects</button>
          </a>

        </div>

        <div className="buton">



          <input className='inp' placeholder='Enter your city' type="url" name="" id="" />
          <input className='inpt' placeholder='location' type="url" name="" id="" />
          <input className='inp' type="button" value="Find" />
        </div>






      </div>
    </>
  );
}
