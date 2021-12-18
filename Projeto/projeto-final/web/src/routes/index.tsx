import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Adm from '../pages/Adm';
import Dashboard from '../pages/Dashboard';
import Route from './Route';
import Create from '../pages/Create';
import Edit from '../pages/Edit';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/adm" exact component={Adm} />
        <Route path="/create" exact component={Create} />
        <Route path="/edit" exact component={Edit} />
        {/* <Route path="/..." exact component={...} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
