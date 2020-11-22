import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import DonatorForm from './pages/DonatorForm/DonatorForm';


// exact -> o caminho precisa ser igual.
// switch -> apenas uma rota irá ser chamada 

function Routes(){
    return(
        <BrowserRouter>
           <Switch>
           <Route path="/" exact component={ Landing } />  
           <Route path="/doar"  component={ DonatorForm } />  
           </Switch>          
        </BrowserRouter>
    );
}

export default Routes;