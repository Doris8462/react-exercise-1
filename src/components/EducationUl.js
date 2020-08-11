/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import '../styles/educationUl.scss';
function EducationUl(props) {
  const describeList = () => {
    return props.describeList.map((item) => (
      <li>
        <span className="year">{item.year}</span>
        <div className="describeContent">
          <h4 className="title">{item.title}</h4>
          <p className>{item.describe}</p>
        </div>
      </li>
    ));
  };
  return (
    <div className="EducationUl">
      <h3>EDUCATION</h3>
      <ul>{describeList()}</ul>
    </div>
  );
}

export default EducationUl;
