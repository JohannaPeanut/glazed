import React from 'react';
import './Sec3.scss';

const Sec3 = () => {
  return (
    <div className="Sec3 sec section-padding" id="Democratise-data">
      <section className="section-container">
        <div className="section-intro change-flex-dir">
          <div className="container">
            <div className="text-box section-header">
              <h1>Democratise Your Data</h1>
            </div>
          </div>
          <div className="paragraph">
            <p>
              Enable <strong>self-service</strong> while freeing up valuable
              resources from your team. <br />
              <br />
              <strong>No SQL needed!</strong>
            </p>
          </div>
        </div>
        <div className="diagram-wrapper">
          <div className="diagram old">
            <img
              className="process-desk"
              src="Web-process.png"
              alt="traditional process vs. glazed process: data democratisation, data-driven, code-free, no SQL"
            />
            <img
              className="process-mobile"
              src="mobile-process.png"
              alt="traditional process vs. glazed process: data democratisation, data-driven, code-free, no SQL"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec3;
