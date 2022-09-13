import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <div className="t-container">
        <h3 className="t-title">{props.title}</h3>
    </div>
  )
}

export default Title;

