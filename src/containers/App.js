import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../store';

import { GameWrapper } from '../components/GameWrapper/GameWrapper'
import StartScreen from '../components/StartScreen/StartScreenContainer'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <StartScreen />
            </Route>
            <Route path='/game'>
              <GameWrapper />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
