import React from 'react';
import './Sec6.scss';

const Sec6 = () => {
  return (
    <div className="Sec6" id="Sec6">
      <section>
        <div className="container">
          <div className="vision-wrapper">
            <h1>Our vision</h1>
            <ul>
              <li>
                <img src="Single-truth.png" alt="" />
                <small>Single source of truth for all behavioural data</small>
              </li>
              <li>
                <img src="Inclusive.png" alt="" />
                <small>Inclusive and intuitive access to fast insights</small>
              </li>
              <li>
                <img src="Private.png" alt="" />
                <small>Private: you own your data</small>
              </li>
              <li>
                <img src="customise.png" alt="" />
                <small>Customize it for your needs</small>
              </li>
              <li>
                <img src="Automate.png" alt="" />
                <small>Automate the boring stuff</small>
              </li>
            </ul>
          </div>

          <div className="paragraph">
            <p>
              We envision a future where tracking documentation, analytics and
              design is centralised, fully automated, 1st party, intuitive and
              code-free.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec6;
