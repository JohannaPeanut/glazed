import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <h6>hello@glazedanalytics.com</h6>
      <div>
        <img className="mountain" src="/mountains.png" alt="" />
        <h6>The analytics platform embedded in your product</h6>
      </div>
      <div>
        <img className="logo-white" src="/glazed_white_v1.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
