/* eslint-disable react/prop-types */
import React from 'react';
function AboutMe(props) {
  return (
    <div className="AboutMe">
      <h3>About Me</h3>
      <p className="describe">{props.describe}</p>
    </div>
  );
}

export default AboutMe;
