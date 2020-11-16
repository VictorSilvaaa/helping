import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './landing.css';
import '../../assets/styles/global.css';

import iconBlood from '../../assets/images/icons/blood-home.svg';
import logoImg from '../../assets/images/logoHelping.svg';

function Landing() {
 

  return (
    
    <div id="page-home">
    <div className="content">
      <header>
        <img src={logoImg} alt="logoHelping" />
      </header>

      <main>
        <h1>Faça uma doação e salve vidas. Uma gota pode fazer a diferença</h1>
  
      <div className="buttons">
      <Link to="/createDoantor" id="buttonDonators">
          <span>
            <FiLogIn />
          </span>
          <strong>Seja um doador</strong>
        </Link>
        <Link to="/doadores" id="buttonDonator" >
          <span >
            <img src={iconBlood} alt="iconBlood" />
          </span>
          <strong >Procurar um doador</strong>
        </Link>
      </div>
        
      </main>
    </div>
  </div>
  )
}

export default Landing;