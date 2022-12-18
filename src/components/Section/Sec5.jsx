import React from 'react';
import './Sec5.scss';

const Sec5 = () => {
  return (
    <div className="Sec5 sec section-padding" id="Own-your-data">
      <section>
        <div className="section-intro change-flex-dir">
          <div className="text-box section-header">
            <h1>Own your data 100%</h1>
          </div>
          <div className="paragraph">
            <p>
              Connect to your data warehouse and preferred cloud provider.
              <br />
              <br />
              We do not store your data, we are fully
              <strong> GDPR compliant.</strong>
            </p>
          </div>
        </div>
        <div className="sec5-digram-wrapper">
          <img
            src="100-secure.png"
            alt="glazed product analytics platform connects preferred cloud provider and data warehouse - 	data democratisation"
          />
          <div className="connectors-subtitle">
            <p>Your cloud provider</p>
            <p>Your event collector</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec5;
