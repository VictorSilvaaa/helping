import React from 'react';

import './style.css';

interface randomScreenProps {
  img: string;
  text: string;
}

const RandomScreen: React.FC<randomScreenProps> = (props) => {
  return (
    <div className="random-screen">
      <div className="container">
        <img src={props.img} alt={props.text}></img>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default RandomScreen;