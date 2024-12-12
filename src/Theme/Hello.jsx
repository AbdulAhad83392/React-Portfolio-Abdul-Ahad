import React, { useState } from 'react';

export default function Hello() {
    const [theme, setTheme] = useState("theme-light");

    function changeTheme() {

        const newTheme = theme === "theme-light" ? "theme-dark" : "theme-light";
        setTheme(newTheme);
        document.querySelector("body").className = newTheme;
    }

    return (
        <div>
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
                <div className="a">
                    <div className="card">
                        <h1>Card Title 1</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis saepe voluptatum, explicabo animi voluptates sequi voluptate alias esse pariatur nihil perferendis vel sint.</p>
                    </div>
                    <div className="card">
                        <h1>Card Title 2</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis saepe voluptatum, explicabo animi voluptates sequi voluptate alias esse pariatur nihil perferendis vel sint.</p>
                    </div>
                    <div className="card">
                        <h1>Card Title 3</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam facilis saepe voluptatum, explicabo animi voluptates sequi voluptate alias esse pariatur nihil perferendis vel sint.</p>
                    </div>
                </div>
                <div className="b">
                    <img src="https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg" alt="A health-related image" />
                </div>
            </div>

            <h1>Hello User</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente natus illo dicta nam ratione consequatur amet modi ipsam ducimus est saepe molestiae earum ex eum aut minus.</p>
        </div>
    );
}
