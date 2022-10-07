import React from 'react';
import './Sec5.scss';

const Sec5 = () => {
  return (
    <div className="Sec5 sec section-padding" id="Own-your-data">
      <section className="">
        <div className="section-intro change-flex-dir">
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
      <div className="sec5-digram-wrapper">
        {/* <div className="diagram">
          <div className="diagram-cloud-provider">
            <img className="diagram-side" src="/cloud-provider.png" alt="" />
            <p>Your cloud provider</p>
          </div>
          <div  className="diagram-center">
            <img src="/arrow-2.png" alt="" />
            <img className="glazed-do" src="/glazed-in-box.png" alt="" />
            <img src="/arrow-2.png" alt="" />
          </div>
          <div className="diagram-cloud-provider">
            <img className="diagram-side" src="/event-collector.png" alt="" />
            <p>Your event collector</p>
          </div>
        </div> */}
        <img src="/connectors.png" alt="" />
        <div className='connectors-undertitle'>
          <p>Your cloud provider</p>
          <p>Your event collector</p>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Sec5;
