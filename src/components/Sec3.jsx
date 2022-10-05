import React from 'react';
import './Sec3.scss';

const Sec3 = () => {
  return (
    <div className="Sec3" id="Sec3">
      <section>
        <div className="section-intro">
          <div className="text-box section-header">
            <h1>Democratise Your Data</h1>
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
            <img src="/Emoji-diagram-01.png" alt="" />
          </div>
          <div>
            <img className="vs" src="/VS.png" alt="" />
          </div>
          <div className="diagram new">
            <img src="/Emoji-diagram-glazed.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec3;
