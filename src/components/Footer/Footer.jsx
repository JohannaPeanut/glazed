import React from 'react';
import './Footer.scss';
import MailchimpFormContainer from '../SubscriptionForm/MailchimpFormContainer';

const Footer = () => {
  return (
    <div className="footer">
      <div className="mobile">
        <MailchimpFormContainer />
      </div>
      <h6 className="desktop">hello@glazedanalytics.com</h6>
      <div>
        <img className="mountain" src="/mountains.png" alt="" />
        <h6>The analytics platform embedded in your product</h6>
      </div>
      <div className="footer-bottom-wrapper">
        <img
          className="mobile do-img"
          src="/Doughnuts/doughnut_1f369.png"
          alt=""
        />
        <img className="logo-white" src="/glazed_white_v1.png" alt="" />
        <h6 className="mobile">hello@glazedanalytics.com</h6>
      </div>
    </div>
  );
};

export default Footer;
