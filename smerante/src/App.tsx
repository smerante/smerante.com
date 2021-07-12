import CVComponent from "./pages/cv/CV";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import HomeComponent from './pages/home/Home';
import NavComponent from './components/nav/Nav';

function App() {
  return (
    <Router>
      <NavComponent />
      <div className="body">
        <Switch>
          <Route exact path={["/", "/home"]}>
            <HomeComponent></HomeComponent>
          </Route>
          <Route exact path={["/cv"]}>
            <CVComponent></CVComponent>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
