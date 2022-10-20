import React from 'react';
import './Sec6.scss';

const Sec6 = () => {
  return (
    /* Classname scroll snap for snap of every section */
    <div className="Sec6 sec scroll-snap" id="Our-vision">
      <section className="section-padding">
        <div className="vision-container change-flex-dir">
          <div className="ul-wrapper">
            <h1>Our vision:</h1>
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
          <aside>
            <div>
              <img src="vision.png" alt="glazed vision" />
            </div>
            <div className="paragraph">
              <p>
                We envision a future where <strong>tracking </strong>
                documentation, <strong>analytics </strong> and
                <strong> design</strong> is centralised, fully automated, 1st
                party, intuitive and code-free.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Sec6;
