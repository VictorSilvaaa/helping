import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import createDonator from './pages/DonatorForm/index';


// exact -> o caminho precisa ser igual.
// switch -> apenas uma rota irá ser chamada 

function Routes(){
    return(
        <BrowserRouter>
           <Switch>
           <Route path="/" exact component={ Landing } />  
           <Route path="/createDonator"  component={ createDonator } />  
           </Switch>          
        </BrowserRouter>
    );
}

export default Routes;