import React,{FormEvent,useState,useEffect} from  'react';

import { Link,Redirect, useParams} from 'react-router-dom';
import api from '../../services/api';
import "./index.css";
//components
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";


interface DonatorParms{ 
    id:string;
}
interface Donator{
    id: number;
    name: string;
    sex: string;
    phone_number: string;
    description: string;
    blood:string;
    latitude:number;
    longitude:number;
  }
const defaultUser = {
    id: 0,
    name: '',
    sex: '',
    phone_number: '',
    description: '',
    blood:'',
    latitude:0,
    longitude:0,
}
function Contact(e: FormEvent){
   
  

    const [User, setUser] = useState<Donator>(defaultUser);
    const Params = useParams<DonatorParms>();
    const [Name, setName] = useState('');
    const [Message, setMessage] = useState('');

    useEffect(() => {
      searchDonators()
    },[Params.id])
  
    async function searchDonators() { 
    try{  
      const response = await api.get(`/donator/${Params.id}`);
      setUser(response.data);
    }
    catch (error){
      console.log(error);
    }
  }

  function a(){
    console.log(User);
  }
    return (
      <div id="page">
        <PageHeader 
              src="/doadores"
              title="Quase lá"
              description="Entre em contanto com o doador 
              escolhido atráves do seu whatsapp"  >
        </PageHeader>

        <div className="container">
          <main>
            <section id="perfilDoador">
              <h4>Sobre o doador</h4>
              <ul>
                <li>Nome: {User.name}</li>
                <li>Bairro: Maiobinha</li>
                <li>Tipo Sanguíneo: {User.blood}</li>
              </ul>
            </section>

            <hr/>
            
            <Input 
                name="name" 
                label="Nome Completo" 
                placeholder="Digite aqui..."
                value={Name}
                onChange={(e) => { setName(e.target.value) }}>
            </Input>
              
            <Textarea
                required
                name="description"
                label="Mensagem"
                placeholder="Digite sua mensagem aqui..."
                value={Message}
                onChange={(e) => { setMessage(e.target.value) }} >
            </Textarea>

            <div className="buttons">
              <a href={`https://api.whatsapp.com/send?phone=55${User.phone_number}&text=${`Olá meu nome é ${Name}, e vim pelo Helping. ${Message} `}`} target="_blank">Enviar</a>
            </div>

          </main>
            
        </div>
         
      </div>
    );
}
export default Contact;