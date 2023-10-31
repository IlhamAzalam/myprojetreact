import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './component.tsx/Form';
function Routes() {
  return (
    <Router>
      <Switch>
      <Route path='./ ' element={ <Formulaire/> }/>
      <Route path='./cv ' element={ < Cv /> }/>
      </Switch>
    </Router>
  );
}

export default Routes;
