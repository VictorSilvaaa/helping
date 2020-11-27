import React ,{useEffect,useState,FormEvent } from 'react';
import api from '../../services/api';
import './listDonators.css'
import '../../assets/styles/global.css';
import {FaUserAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import PageHeader from "../../components/PageHeader";


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


function ListDonators() {


  const [Donators, setDonators] = useState([]);
  
  useEffect(() => {
    searchDonators()
  },[])

  async function searchDonators() { 
  try{  
    const response = await api.get('/donators');
    setDonators(response.data);
  }
  catch (error){
    console.log(error);
  }
}


  return (
    
    <div >
        <PageHeader
        src="/" 
        title="Aqui  estão alguns doadores disponíveis"
        description="Entre em contato com algum doador e conversem" >
        </PageHeader>
    
      <main>
        <div id="listDonators">
         <div className="cards">
           {Donators.map((donator:Donator) => {
             return(
              <div className="card-container">
                <span className="blood">{donator.blood}</span>
               <FaUserAlt className="round"></FaUserAlt>
               
                <h3>{donator.name}</h3>
                <p>{donator.description}</p>

                <div className="buttons">

                <Link to={`/contato/${donator.id}`}className="primary">
                   mensagem
                </Link>
                  
                </div>

                <div className="skills">
                  <h6>saiba mais</h6>
                  <ul>
                    <li>Localização</li>
                    <li>contato</li>
                  </ul>
              </div>
        </div>     
                       
                  );
              })}
            
          </div>
        </div>
      </main>
    </div>

  )
}

export default ListDonators;