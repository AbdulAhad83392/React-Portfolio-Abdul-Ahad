import React from 'react';
import './Api.css';
import { CiFacebook, CiYoutube, CiSearch } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { IoWifi } from 'react-icons/io5';

export default function Api() {

  return (
    <div>
      <div className="container">
        <div className="row" style={{height:'7vh'}}>
          <div className="col-4">
            <CiFacebook /> <FaXTwitter /> <CiYoutube /> <IoWifi />
          </div>

          <div className="col-4">
            <h2>The Soledad Times</h2>
          </div>

          <div className="col-4">
            <button className="bth ">
              <CiSearch />
              Search
            </button>
          </div>
        </div>
      </div>

      <hr />

      

      {/* Navigation */}
      <div  className="container jhj">
      <div   className="nav">
              <label htmlFor="">
                  

          <h1><button class="btn btnt btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FaXTwitter />
          </button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
                              <h5 id="offcanvasRightLabel">The solenaoid times <br /> <br /><br /><input type="text" placeholder='Search' name="" id="" />
                                  <br />  <br /> <div class="dropdown">
                                    <button
                                        class="btn btyh btn-secondary dropdown-toggle"
                                        type="button"
                                        id="triggerId"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Home
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="triggerId">
                                        <a class="dropdown-item" href="#">Home 1</a>
                                        <a class="dropdown-item" href="#">Home 2</a>
                                        <a class="dropdown-item" href="#">Home 3</a>
                                       
                                    </div>
                                  </div>
                                  
                                  <h5 className='hth'>
                                  <br />  About
                                  <br />  <br /> Contact 
                                  <br /><br />  Blogs
                                  <br />  <br /> Teams 
                                  <br /><br />  Services
                               </h5>
                                  <br /><br /><br /><p>@2024 - All Right Reserved. Designed and Developed by PenciDesign</p>

                                  <br /><br />             <CiFacebook /> <FaXTwitter /> <CiYoutube /> <IoWifi />

                              
                              </h5>

  </div>
  <div class="offcanvas-body">
  </div>
</div></h1>
          <ul>
                      <li>
                      <div class="dropdown">
            <button class="dropbtn">Home</button>
            <div class="dropdown-content">
                <a href="#">Child 1</a>
                <a href="#">Child 2</a>
                <a href="#">Child 3</a>
            </div>
        </div>
            </li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </label>
        <hr />
      </div>
      </div>
    </div>
  );
}
