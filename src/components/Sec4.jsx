import React from 'react';
import './Sec4.scss';

const Sec4 = () => {
  return (
    <div className="Sec4 sec section-padding" id="Centralise-tracking">
      <section className="section-container">
        <div className="section-intro change-flex-dir">
          <div className="">
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
        </div>
        <div className='sec4-digram-wrapper'>
          
        <div className="diagram change-flex-dir ">
          <img className="other-apps-img" src="/other-apps-in-box.png" alt="" />
          <img className="vs" src="/VS.png" alt="" />
          <img className="glazed-img"  src="/glazed-in-box.png" alt="" />

        </div>
        </div>
      </section>
    </div>
  );
};

export default Sec4;
