import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Competitions from './components/competitions/Competitions';
import Comp from './components/competitions/Comp';
import NewComp from './components/competitions/NewComp';
import Login from './components/Login';
import User from './components/User';
import Index from './components/Index';
// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
          <IndexRoute component={Index} />
          <Route path="/login" component={Login}></Route>
          <Route path="/error/:errorMsg" component={Error} />
          <Route path="/user/:id" component={User}>
            <Route path="competitions" component={Competitions}></Route>
            <Route path="competition/:compId" component={Comp}></Route>
            <Route path="competitions/new" component={NewComp}></Route>
          </Route>
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'));
