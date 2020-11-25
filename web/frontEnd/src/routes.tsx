import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import DonatorForm from './pages/DonatorForm/DonatorForm';
import ListDonators from './pages/ListDonators/listDonators';
import ContactForm from './pages/ContatoForm/ContatoForm';

// exact -> o caminho precisa ser igual.
// switch -> apenas uma rota irá ser chamada 

function Routes(){
    return(
        <BrowserRouter>
           <Switch>
           <Route path="/" exact component={ Landing } />  
           <Route path="/doar"  component={ DonatorForm } />  
           <Route path="/doadores"  component={ ListDonators } />
           <Route path="/contato/:id"  component={ ContactForm  } />   
           </Switch>          
        </BrowserRouter>
    );
}

export default Routes;