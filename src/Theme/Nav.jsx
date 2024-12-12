import React, { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <header>
        <nav>
          <h1>Logo</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <button onClick={changeTheme}>Theme Change</button>
        </nav>
      </header>
<div className="main">
      <div className="img"></div>
      <div className="two"><h1>Hello user</h1> <b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste alias ipsa similique beatae expedita nam voluptatem nisi aut totam dolor repellendus cum excepturi, explicabo quae ullam, temporibus voluptatibus at corrupti! Consequuntur culpa voluptatibus sint facilis cupiditate possimus doloribus sapiente doloremque? <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto numquam pariatur cupiditate consequatur, porro distinctio vero neque obcaecati explicabo non minima iusto harum ducimus quaerat asperiores eum dolorem incidunt.</b></div>
      </div>




    </div>
  );
}