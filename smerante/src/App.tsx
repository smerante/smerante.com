import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import HomeComponent from './pages/home/Home';
import NavComponent from './components/nav/Nav';
import store from './app/store/userStore'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavComponent />
        <div className="body">
          <Switch>
            <Route exact path={["/", "/home"]}>
              <HomeComponent></HomeComponent>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
