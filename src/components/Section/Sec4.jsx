import React from 'react';
import './Sec4.scss';

const Sec4 = () => {
  return (
    <div className="Sec4 sec section-padding" id="Centralise-tracking">
      <section className="section-container">
        <div className="section-intro change-flex-dir">
          <div className="desktop">
            <p>
              A <strong>single source of truth</strong> for your team: product
              managers, designers, developers, QA, onboardings...
              <br />
              <br />
              <strong>No complicated spreadsheets!</strong>
            </p>
          </div>

          <div className="text-box section-header">
            <h1>Centralise Tracking</h1>
          </div>

          <div className="mobile">
            <p>
              A <strong>single source of truth</strong> for your team: product
              managers, designers, developers, QA, onboardings...
              <br />
              <br />
              <strong>No complicated spreadsheets!</strong>
            </p>
          </div>
        </div>
        <div className="sec4-digram-wrapper">
          <div className="diagram change-flex-dir ">
            <img
              className="process-desk"
              src="centralise-screen.png"
              alt="Analytics with complicated spreadsheats vs. glazed: centralised tracking, single source of truth, easy to us"
            />
            <img
              className="process-mobile"
              src="centralise-mobile.png"
              alt="Analytics with complicated spreadsheats vs. glazed: centralised tracking, single source of truth, easy to us"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec4;
