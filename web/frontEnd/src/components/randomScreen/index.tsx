import React from 'react';

import './style.css';

interface randomScreenProps {
  img: string;
  text: string;
}

const RandomScreen: React.FC<randomScreenProps> = (props) => {
  return (
    <div className="success-screen">
      <img src={props.img} alt="Cadastro realizado com sucesso"></img>
      <p>{props.text}</p>
    </div>
  )
}

export default RandomScreen;