import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import '../styles/pages/home2.css';
import logoImg from '../images/logoHelping.svg';
import homeimg from '../images/landingHelping.svg';
import Icon from '../images/icon.png';


function landing() {
    return (
      
      <div id="page-home2">
          <header>
                lala
          </header>

        <div className="cards">

            
        <article>
               <header>
                 <img src= {Icon} alt="logoHelping"></img>
               </header>

                <aside>
                    <h1>Manoel</h1>
                    <hr></hr>
                    <p>Muitas crianças estão esperando sua visita</p>
                    <footer>Saiba mais </footer>
                </aside>  
                
          </article>

          <article>
               <header>
                 <img src= {Icon} alt="logoHelping"></img>
               </header>

                <aside>
                    <h1>Manoel</h1>
                    <hr></hr>
                    <p>Muitas crianças estão esperando sua visita</p>
                    <footer>Saiba mais </footer>
                </aside>  
                
          </article>

          <article>
               <header>
                 <img src= {Icon} alt="logoHelping"></img>
               </header>

                <aside>
                    <h1>Manoel</h1>
                    <hr></hr>
                    <p>Muitas crianças estão esperando sua visita</p>
                    <footer>Saiba mais </footer>
                </aside>  
                
          </article>

        </div>
          
            
            
              
              
          
              
              
           

        
      </div>
    );
}

export default landing;