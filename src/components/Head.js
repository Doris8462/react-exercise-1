/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import '../styles/head.scss';
function Head(props) {
  return (
    <div className="Head">
      <img
        className="avatar"
        src={require('../assets/avatar.jpg')}
        alt="userPhoto"
      />
      <h1>Hello,</h1>
      <h2>MY NAME IS {props.name} AND THIS IS MY RESUME/CV</h2>
    </div>
  );
}

export default Head;
