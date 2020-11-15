import React, { ReactElement, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import "./styles.css";
import warningIcon from "../../assets/images/icons/warning.svg";

import api from '../../services/api';


function Createdonator(): ReactElement {
  
  const history = useHistory();

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [description, setDescription] = useState('');
  const [blood_code, setBlood_code] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude]  = useState('');

  function handleCreateDonator(e: FormEvent) {
    e.preventDefault();

    api.post('/donator', {
      name,
      sex,
      phone_number,
      description,
      blood_code,
      latitude,
      longitude,
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro.');
    });
  }

  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrível que você que ajudar"
        description="O primeiro passo é preencher esse formulario de inscrição."
      />

      <main>
        <form onSubmit={handleCreateDonator}>
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
                { value: "Masculino", label: "Masculino" },
                { value: "Feminino",  label: "Feminino" },       
              ]}
            />

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
          <Input 
              name="latitude"  
              label="latitude" 
              value={latitude}
              onChange={(e) => { setLatitude(e.target.value) }}
            />
            <Input 
              name="longitude"  
              label="longitude" 
              value={longitude}
              onChange={(e) => { setLongitude(e.target.value) }}
            />

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
export default Createdonator;