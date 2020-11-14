import React, { ReactElement, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from "../../components/PageHeader/";
import Input from "../../components/Input/";
import Textarea from "../../components/Textarea/";
import Select from "../../components/Select/";

import "./styles.css";
import warningIcon from "../../assets/images/icons/warning.svg";

import api from '../../services/api';


function createDonator(): ReactElement {
  const history = useHistory();

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [description, setDescription] = useState('');
  const [blood_code, setBlood_code] = useState('');
  const [latitude, setLocation] = useState('');
  const [longitude, setLongitude]  = useState('');

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      sex,
      whatsapp: Number(whatsapp),
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
        <form>
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
              name="whatsapp"  
              label="Whatsapp" 
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
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
                { value: "A+", label: "A+" },
                { value: "A-", label: "A-" },
                { value: "B+", label: "B+" },
                { value: "B-", label: "B-" },
                { value: "AB+", label: "AB+" },
                { value: "AB-", label: "AB-" },
                
              ]}
            />
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante <br />
              Preencha todos os dados
            </p>
            <button type="button">Salvar cadastro</button>
          </footer>

        </form>
        
      </main>
    </div>
  );
}
export default createDonator;