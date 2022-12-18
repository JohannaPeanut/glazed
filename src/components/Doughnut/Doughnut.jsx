import React from 'react';

import './Doughnut.scss';

const Doughnut = ({ doughnut }) => {
  const { id, src} = doughnut
  return (
    <div id="dn-scroll" className={`dn${id}-sticky`}>
      <img
        className={`doughnut${id}`}
        src={src}
        width="60px"
        height="60px"
        alt="#"
      />
    </div>
  );
};

export default Doughnut;
