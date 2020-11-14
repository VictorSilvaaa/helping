import React from 'react';
import { Link } from 'react-router-dom';

import './landing.css';
import '../../assets/styles/global.css';

import iconBlood from '../../images/icons/blood-home.svg';
import cadastro from '../../images/icons/cadastro.svg';

import logoImg from '../../images/logoHelping.svg';

function Landing() {
 

  return (
    
    <div id="page-landing">
      <div id="content-wrapper">    
          <div className="logo-container">
              <img src={logoImg} alt="Helping" />
           </div>

           <h2>Faça uma doação e salve vidas. Uma gota pode fazer a diferença</h2>

           <div className="buttons-container">
              <Link to="/cadastro" className="cadastre-se">
                <img src={cadastro} alt="Doadores"/>
                <span> Cadastre-se</span> 
              </Link>
              <Link to="/doadores" className="doadores">
                <img src={iconBlood} alt="Doadores"/>
                <span> Doadores</span> 
               </Link>
           </div>
          </div>
    </div>
  )
}

export default Landing;