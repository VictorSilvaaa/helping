import React ,{useEffect,useState,FormEvent } from 'react';
import api from '../../services/api';
import './listDonators.css'
import '../../assets/styles/global.css';
import {FaUserAlt} from 'react-icons/fa';

import PageHeader from "../../components/PageHeader";

interface Donator{
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
        title="Aqui  estão alguns doadores disponíveis"
        description="Entre em contato com algum doador e conversem"
        >

        </PageHeader>
      
      <main>
            <div id="listDonators">
              <div className="cards">
              {Donators.map((donator:Donator) => {
                  return(
                    <div className="card">
                        <header>
                            <FaUserAlt></FaUserAlt>
                        </header>
                        <section>
                          <p>{donator.name}</p>
                          <p>{donator.blood}</p>
                          <p>{donator.description}</p>
                          <button>
                            <strong>Conhecer doador</strong>
                          </button>
                        </section>
                       

                        
                        
         
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