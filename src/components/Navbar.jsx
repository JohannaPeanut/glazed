import React from 'react';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="Navbar">
      <a href="#Top">
        <img src="/Doughnuts/doughnut_1f369.png" alt="" />
        <p>Top</p>
      </a>
      <a href="#Democratise-data">
        <img src="/Doughnuts/doughnut_1f369_11.png" alt="" />
        <p>Democratise data</p>
        </a>
      <a href="#Design-driven">
        <img src="/Doughnuts/doughnut_1f369_7.png" alt="" />
        <p>Design-driven</p>
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
  );
};

export default Navbar;
