import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/global.css';
import './landing.css';
import '../../styles/global.css';

import iconBlood from '../../images/icons/blood-home.svg';
import cadastro from '../../images/icons/cadastro.svg';

import logoImg from '../../images/logoHelping.svg';
import homeimg from '../../images/landingHelping.svg';

function Landing() {
 

  return (

    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Helping" />
          <h2>Faça uma doação e salve vidas. Uma gota pode fazer a diferença</h2>
        </div>

        <img 
          src={homeimg} 
          alt="bloodHome" 
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/cadastro" className="cadastre-se">
          <img src={cadastro} alt="Doadores"/>
            Cadastre-se
          </Link>

          <Link to="/doadores" className="doadores">
            <img src={iconBlood} alt="Doadores"/>
            Doadores
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing;