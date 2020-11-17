import React, {ChangeEvent, ReactElement, useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import axios from 'axios';
//maps
import { LeafletMouseEvent } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
//componentes
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
//style geral
import "./styles.css";
import warningIcon from "../../assets/images/icons/warning.svg";
import {SiGooglemaps} from 'react-icons/si';

//formulário para criar doador
function Formdonator(): ReactElement {

  const history = useHistory();
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [description, setDescription] = useState('');
  const [blood_code, setBlood_code] = useState('');
  
  //enviar todos para banco de dados
  function CreateDonator(e: FormEvent) {
e.preventDefault();

api.post('/donator', {
  name,
  sex,
  phone_number,
  description,
  blood_code,
}).then(() => {
  alert('Cadastro realizado com sucesso!');

  history.push('/');
}).catch(() => {
  alert('Erro no cadastro.');
});
  }
 //location
 
  //page
return (
<div className="container" id="page-form">
  <PageHeader
  title="Que incrível que você que ajudar"
  description="O primeiro passo é preencher esse formulario de inscrição."
  />
  <main>
    <form  onSubmit={CreateDonator}>
      <fieldset>
          <legend>Seus Dados</legend>
          <Input 
            name="name" 
            label="Nome Completo" 
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />

          <Select
            name="sex"
            label="Gênero"
            value={sex}
            onChange={(e) => { setSex(e.target.value) }}
            options={[
          {value: "Masculino", label: "Masculino" },
          {value: "Feminino",  label: "Feminino" },   
            ]}
          />

        <div id="map-container">
          <label>Endereço</label> 
          <button type="button" >
            <span><SiGooglemaps/></span>
            <strong>Usar localização atual</strong>
          </button>

          <MapContainer
              center={[-27.2092052,-49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              id="map-container"   
            >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />   
          </MapContainer>
        </div>


        <Input 
          name="phone_number"  
          label="Whatsapp" 
          value={phone_number}
          onChange={(e) => { setPhone_number(e.target.value) }}
        />

        <Textarea 
          name="description"
          label="Descrição"
          value={description}
          onChange={(e) => { setDescription(e.target.value) }}
        />
      </fieldset>

      <fieldset>
        <legend>Sobre</legend>
        <Select
          name="Blood-code"
          label="Tipo sanguíneo"
          value={blood_code}
          onChange={(e) => { setBlood_code(e.target.value) }}
          options={[
        { value: "1", label: "A+" },
        { value: "2", label: "A-" },
        { value: "3", label: "B+" },
        { value: "4", label: "B-" },
        { value: "5", label: "AB+" },
        { value: "6", label: "AB-" },

          ]}
        />
      </fieldset>

      

      <footer>
        <p>
          <img src={warningIcon} alt="Aviso Importante" />
          Importante <br />
          Preencha todos os dados
        </p>
        <button type="submit">Salvar cadastro</button>
          </footer>

   </form>
 </main>
</div>
  );
}
export default Formdonator;