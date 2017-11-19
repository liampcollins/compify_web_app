import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Competitions from './components/competitions-list/CompetitionsList';
import Comp from './components/competition-page/CompetitionPage';
import NewComp from './components/new-competition/NewCompetition';
import Login from './components/login/Login';
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
        <Route path="/login" component={Login} />
        <Route path="/error/:errorMsg" component={Error} />
        <Route path="/user/:id" component={User}>
          <Route path="competitions" component={Competitions} />
          <Route path="competition/:compId" component={Comp} />
          <Route path="competitions/new" component={NewComp} />
        </Route>
      </Route>
    </Router>
  </Provider>
);
render(router, document.getElementById('root'));
