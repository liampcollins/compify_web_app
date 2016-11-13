// let's go!
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Competitions from './components/Competitions';
import Comp from './components/Comp';
import NewComp from './components/NewComp';
import Login from './components/Login'
// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}></IndexRoute>
        <Route path="/competitions" component={Competitions}></Route>
        <Route path="/competition/:compId" component={Comp}></Route>
        <Route path="/competitions/new" component={NewComp}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
