import React from 'react';
import './Sec5.scss';

const Sec5 = () => {
  return (
    <div className="Sec5" id="Own-your-data">
      <section className="section-padding">
        <div className="section-intro">
          <div className="text-box section-header">
            <h1>Own your data 100%</h1>
          </div>
          <div className="paragraph">
            <p>
              Connect to your data warehouse in your preferred cloud provider.
              <br />
              <br />
              We do not store your data, we are fully
              <strong> GDPR compliant.</strong>
            </p>
          </div>
        </div>

        <div className="diagram">
          <div>
            <img src="/cloud-provider.png" alt="" />
            <p>lorem</p>
          </div>
          <img src="/arrow-2.png" alt="" />
          <img src="/glazed-in-box.png" alt="" />
          <img src="/arrow-2.png" alt="" />
          <div>
            <img src="/event-collector.png" alt="" />
            <p>lorem</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec5;
