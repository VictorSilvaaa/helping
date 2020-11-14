import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader/";
import Input from "../../components/Input/";
import Textarea from "../../components/Textarea/";
import Select from "../../components/Select/";

import warningIcon from "../../assets/images/icons/warning.svg";

export default function createDonator() {
  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="Que incrível que você que ajudar"
        description="O primeiro passo é preencher esse formulario de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="whatsapp"  label="Whatsapp" />
          <Textarea name="description" label="Descrição" />
        </fieldset>

        <fieldset>
          <legend>Sobre</legend>
          <Select
            name="Blood-code"
            label="Tipo sanguíneo"
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
      </main>
    </div>
  );
}
