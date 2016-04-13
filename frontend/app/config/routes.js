import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
// routing
import Main from '../components/Main';
import Home from '../containers/Home';
import TodosContainer from '../containers/TodosContainer';
import AddContainer from '../containers/AddContainer';



const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='todos' component={TodosContainer} />
      <Route path='addnew' component={AddContainer} />

    </Route>
  </Router>
);


export default routes;
