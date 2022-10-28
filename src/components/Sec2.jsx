import React from 'react';
import './Sec2.scss';

const Sec2 = () => {
  return (
    <div className="Sec2 sec" id="Data-driven">
      <section className="change-flex-dir">
        <div className="wireframe">
          <img
            src="data-driven-1.png"
            alt="UI design files: Screen you want analytics from
"
          />
          <p>
            Browse through your design files until you find the screen you want
            insights from.
          </p>
        </div>
        <div className="wireframe">
          <img
            className="wireframe-2-img"
            src="data-driven-2.png"
            alt="Event or screen analytics loaded from data warehouse and data visualisation - enables data-driven design, code-free"
          />
          <p>
            Click on the screen or event of interest to load the analytics from
            your data warehouse.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sec2;
