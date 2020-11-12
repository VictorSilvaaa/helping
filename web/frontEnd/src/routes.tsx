import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing'
import Home2 from './pages/home2'



// exact -> o caminho precisa ser igual.
// switch -> apenas uma rota irá ser chamada 

function Routes(){
    return(
        <BrowserRouter>
           <Switch>
           <Route path="/" exact component={ Landing } />  
           </Switch>
               
               
           
        </BrowserRouter>
    );
}

export default Routes;