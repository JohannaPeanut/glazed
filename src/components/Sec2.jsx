import React from 'react';
import './Sec2.scss';

const Sec2 = () => {
  return (
    /* Classname scroll snap for snap of every section */
    <div className="Sec2 sec scroll-snap" id="Data-driven">
      <section className="change-flex-dir">
        <div className="wireframe">
          <img src="data-driven-1.png" alt="" />
          <p>
            Browse through your design files until you find the screen you want
            insights from.
          </p>
        </div>
        <div className="wireframe">
          <img className="wireframe-2-img" src="data-driven-2.png" alt="" />
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
