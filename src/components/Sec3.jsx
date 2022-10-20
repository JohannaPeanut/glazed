import React from 'react';
import './Sec3.scss';

const Sec3 = () => {
  return (
    /* Classname scroll snap for snap of every section */
    <div className="Sec3 sec section-padding scroll-snap" id="Democratise-data">
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
            <img className="process-desk" src="Web-process.png" alt="" />

            <img className="process-mobile" src="mobile-process.png" alt="" />
          </div>
          <div>{/* <img className="vs" src="/VS.png" alt="" /> */}</div>
          <div className="diagram new">
            {/* <img src="/Emoji-diagram-glazed.png" alt="" /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec3;
