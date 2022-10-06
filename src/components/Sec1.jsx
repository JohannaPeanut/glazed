import React from 'react';
import './Sec1.scss';

const Sec1 = () => {
  return (
    <div className="Sec1" id="Top">
      <section>
        <div className="main-logo">
          <img src="/Logo.png" alt="" />
        </div>
        <div>

        <div className="claim text-box">
          <h2>The analytics platform build on top of your UI designs.</h2>
        </div>

        </div>
        <div className="call-to-action">
          <h1>Become<br/>design-driven<br/>with 2 clicks:</h1>
          <svg
            width="61"
            height="63"
            viewBox="0 0 30 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5858 62.4142C14.3668 63.1953 15.6332 63.1953 16.4142 62.4142L29.1421 49.6863C29.9232 48.9052 29.9232 47.6389 29.1421 46.8579C28.3611 46.0768 27.0948 46.0768 26.3137 46.8579L15 58.1716L3.68629 46.8579C2.90524 46.0768 1.63892 46.0768 0.857866 46.8579C0.0768177 47.6389 0.0768177 48.9052 0.857867 49.6863L13.5858 62.4142ZM13 8.74228e-08L13 61L17 61L17 -8.74228e-08L13 8.74228e-08Z"
              fill="#434F68"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Sec1;
