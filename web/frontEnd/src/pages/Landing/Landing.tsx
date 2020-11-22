import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineForm } from 'react-icons/ai';
import { BiDonateBlood } from 'react-icons/bi';

import './landing.css';
import '../../assets/styles/global.css';

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
          <Link to="/doar" id="btn-create-donator" className="button">
              <span>
                <AiOutlineForm id="doador" />
              </span>
              <strong>Seja um doador</strong>
            </Link>
          <Link to="/doadores" id="btn-donators" className="button">
            <span >
            <BiDonateBlood id="blood"/>
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