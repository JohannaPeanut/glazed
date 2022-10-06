import React from 'react';
import './Sec4.scss';

const Sec4 = () => {
  return (
    <div className="Sec4" id="Centralise-tracking">
      <section className="section-padding">
        <div className="section-intro">
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

        <div className="diagram">
          <img src="/other-apps-in-box.png" alt="" />
          <img className="vs" src="/VS.png" alt="" />
          <img src="/glazed-in-box.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Sec4;
