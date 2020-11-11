import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../images/logoHelping.svg';
import homeimg from '../images/landingHelping.svg';

function landing() {
    return (
      <div id="page-landing">
        <div className="content-wrapper"> 
          <img src= { logoImg } alt="logoHelping"></img>
          
          
   
            <h1>Faça uma doação e salve vidas. Uma gota pode fazer a diferença</h1>
         
          <div className="location">
            <strong>São Luís</strong>
            <span>Maranhão</span>
          </div>

       
            <Link to="/app" className="enter-app"> 
            cadastre-se
            </Link>
            

            
         
       
        </div>
      </div>
    );
}

export default landing;