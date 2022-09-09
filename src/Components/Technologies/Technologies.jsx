import React from 'react';
import './Technologies.css';

const Technologies = () => {
  return (
    <div className="tech-container">
        <h3 className="tech-title">Tecnologias</h3>
        <ul className="tech-list">
            <li className="tech-item">JAVASCRIPT</li>
            <li className="tech-item">REACTJS</li>
            <li className="tech-item">NODEJS</li>
        </ul>
        <ul className="tech-list">
            <li className="tech-item">GIT</li>
            <li className="tech-item">GITHUB</li>
            <li className="tech-item">HTML</li>
        </ul>
        <ul className="tech-list">   
            <li className="tech-item">CSS</li>
            <li className="tech-item">ELIXIR</li>
            <li className="tech-item">REACT NATIVE</li>
        </ul> 
    </div>
  )
}

export default Technologies;