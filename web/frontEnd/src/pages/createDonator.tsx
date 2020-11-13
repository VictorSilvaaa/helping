import React from "react";

import "../styles/pages/createDonator.css";
import PageHeader from "../components/PageHeader/";
import Input from "../components/Input/";
import Textarea from "../components/Textarea/";
import Select from "../components/Select/";

export default function createrDonator() {
  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer ajudar as pessoas"
        description="O primeiro passo é preencher esse formulario de cadastro."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Select 
              name="sex"
              label="Gênero" 
              options={[
                { value: "Masculino", label: "Masculino"},
                { value: "Feminino", label:  "Feminino"},
                { value: "Manoel gay", label:  "manoel gay"},
              ]}
           />
          <Input name="phone_number" label="Whatsapp" />
          <Textarea name="description" label="Descrição" />
          <Select 
              name="blood_code"
              label="Tipo sanguíneo" 
              options={[
                { value: "1", label: "A+"},
                { value: "2", label:  "A-"},
                { value: "2", label:  "B+"},
                { value: "2", label:  "B-"},
              ]}
           />

        </fieldset>

        <footer>
          <p>
            
            Importante <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}
