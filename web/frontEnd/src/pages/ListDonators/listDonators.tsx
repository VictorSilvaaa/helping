import React ,{useState,FormEvent } from 'react';
import api from '../../services/api';

interface Donator{
  name: string;
  sex: string;
  phone_number: string;
  description: string;
  blood_type:string;
  latitude:number;
  longitude:number;
}


function ListDonators() {


  const [Donators, setDonators] = useState([]);
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
      <h1>Listar doadores</h1>
      <button type="button" onClick={searchDonators}>Search</button>
      
      <main>
        {Donators.map((donator:Donator) => {
          return(
            <div>
              <p>{donator.name}</p>
            </div>
          )})}
      </main>
    </div>

  )
}

export default ListDonators;