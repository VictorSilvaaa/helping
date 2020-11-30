import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineForm } from 'react-icons/ai';
import { BiDonateBlood } from 'react-icons/bi';

import './landing.css';
import '../../assets/styles/global.css';

import logoImg from '../../assets/images/logoHelping.svg';

import Card1 from './Card1/index';

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
    <div className="Cards">
      <div id="1" className="Card">
        <Card1
        title="Condições necessárias para doar sangue"
        fonte="Ministério da Saúde"
        src="https://i.ibb.co/C1qQqvc/Blood-donation-Doctor-and-patient-cartoon-characters-Volunteer-donating-blood-for-transfusion-in-hos.jpg"
        li1="Estar em boas condições de saúde"
        li2="Ter entre 16 e 69 anos"
        li3="Pesar no mínimo 50kg">
        </Card1>
      </div>
      <div id="2" className="Card">
        <Card1
        title="Impedimentos definitivos
        para doar sangue"
        fonte="Ministério da Saúde"
        src="https://i.ibb.co/C1qQqvc/Blood-donation-Doctor-and-patient-cartoon-characters-Volunteer-donating-blood-for-transfusion-in-hos.jpg"
        li1=" Uso de drogas ilícitas injetáveis."
        li2="Doenças associadas aos vírus HTLV I e II"
        li3="AIDS (vírus HIV)...">
        </Card1>
      </div>
    </div>

  </div>
  )
}

export default Landing;