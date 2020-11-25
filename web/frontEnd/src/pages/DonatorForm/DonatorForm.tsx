import React, {ReactElement, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
//maps
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
//componentes
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import mapMarkerIcon from "../../utils/mapIcon";
import RandomScreen from "../../components/randomScreen/";

//style geral
import 'leaflet/dist/leaflet.css';
import "./donatorForm.css";
import "../../assets/styles/global.css";
import warningIcon from "../../assets/images/icons/warning.svg";
import successIcon from '../../assets/images/icons/success-check-icon-2.svg';
import failedIcon from '../../assets/images/icons/failedIcon.svg';


function DonatorForm(): ReactElement {
  //declaração dados
  const history = useHistory();
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [description, setDescription] = useState('');
  const [blood_code, setBlood_code] = useState('');
  const [latitude, setLatitude] = useState(1);
  const [longitude, setLongitude] = useState(1);
  const [randomScreen, setRandomScreen] = useState('');
 
  
  //geolocalização
  function geolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);   
      });
    }
  }

  //enviar dados quando submit
  function CreateDonator(e: FormEvent) {
  e.preventDefault();

  api.post('/donator', {
    name,
    sex,
    phone_number,
    description,
    blood_code,
    latitude,
    longitude  
  }).then(() => {
    setRandomScreen('success');
    setTimeout(()=>{
      history.push('/')
    }, 4500);

  }).catch(() => {
    setRandomScreen('failed');
    setTimeout(()=>{
      history.push('/doar')
    }, 4500);
  });
  }

return (
  
<div id="page-form">
  <div className="content">
    <PageHeader
    src="/"
    title="Que incrível que você quer ajudar"
    description="O primeiro passo é preencher esse formulario de inscrição."
    />
    <main>
      <form onSubmit={CreateDonator}>
        <fieldset>
          <legend>Seus Dados</legend>
            <Input 
              required
              name="name" 
              label="Nome Completo" 
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />

            <Select
              required
              name="sex"
              label="Gênero"
              value={sex}
              onChange={(e) => { setSex(e.target.value) }}
              options={[
              {value: "Masculino", label: "Masculino" },
              {value: "Feminino",  label: "Feminino" },]}  
            />

          <div className="map-block">
            <label>Localização</label> 

            <MapContainer
                center={[-2.6350548,-44.2668795]}
                style={{ width: '100%', height: 280 }}
                zoom={10}
                id="map-container"   
              >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />   

              { longitude !== 0? (
                <Marker 
                  interactive={false} 
                  icon={mapMarkerIcon}
                  position={[
                    latitude, longitude
                  ]} />
              ) : null }

            </MapContainer>
            <button type="button" onClick={geolocation} >   
              <strong>Usar localização atual</strong>
            </button>
          </div>

          <Input
            required 
            name="phone_number"  
            label="Whatsapp" 
            value={phone_number}
            onChange={(e) => { setPhone_number(e.target.value) }}
          />

          <Textarea 
            required
            name="description"
            label="Descrição"
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
          />
        </fieldset>

        <fieldset>
          <legend>Sobre</legend>
          <Select
            required
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
          <button type="submit" >Salvar cadastro</button>
        </footer>

    </form>
  </main>
  </div>
  
  { randomScreen === 'success' && (
    <RandomScreen img={successIcon} text="Cadastro realizado com sucesso"/>
  )}

  {randomScreen === 'failed' && (
    ( <RandomScreen img={failedIcon} text="Houve um erro com o cadastro, tente novamente"/> )
  )}

</div>
);
}

export default DonatorForm;