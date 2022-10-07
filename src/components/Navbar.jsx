import React from 'react';
import { useState } from 'react';
import './Navbar.scss'

const Navbar = () => {

  const [isExpand, setIsExpand] = useState(false)

  const closeMenu = () => {
    setIsExpand(false);
  };

  // onClick={()=> setIsExpand(!isExpand)}
  // onClick={closeMenu}

  // className of Navbar div: change-flex-dir

  return (
    <div className="nav-bar-wrapper">
      {isExpand ? 
      <div className="toggle Navbar">
        <img src="/Doughnuts/doughnut_1f369.png" alt="" />
      </div> :
      <div className="Navbar">
        <a href="#Top">
          <img src="/Doughnuts/doughnut_1f369.png" alt="" />
        </a>
        <a href="#Design-driven">
          <img src="/Doughnuts/doughnut_1f369_11.png" alt="" />
          <p>Design-driven</p>
          </a>
        <a href="#Democratise-data">
          <img src="/Doughnuts/doughnut_1f369_7.png" alt="" />
          <p>Democratise data</p>
          </a>
        <a href="#Centralise-tracking">
          <img src="/Doughnuts/doughnut_1f369_9.png" alt="" />
          <p>Centralise tracking</p>
          </a>
        <a href="#Own-your-data">
          <img src="/Doughnuts/doughnut_1f369_8.png" alt="" />
          <p>Own your data</p>
          </a>
        <a href="#Our-vision">
          <img src="/Doughnuts/doughnut_1f369_2.png" alt="" />
          <p>Our vision</p>
          </a>
        {/* Mailchimp Component */}
      </div>
}
    </div>
    
  );
};

export default Navbar;
