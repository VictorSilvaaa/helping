import React, { ReactElement, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import "./styles.css";
import PageHeader from "../../components/PageHeader/";
import Input from "../../components/Input/";
import Textarea from "../../components/Textarea/";
import Select from "../../components/Select/";

import warningIcon from "../../assets/images/icons/warning.svg";
import api from '../../services/api';


function createDonator(): ReactElement {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bio, setBio] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems,
    { week_day: 0, from: '', to: '' },
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro.');
    });
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
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
              onChange={(e) => { setName(e.target.value) }}
            />
            <Input name="whatsapp"  label="Whatsapp" />
            <Textarea name="description" label="Descrição"
            onChange={(e) => { setName(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre</legend>
            <Select
              name="Blood-code"
              label="Tipo sanguíneo"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
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