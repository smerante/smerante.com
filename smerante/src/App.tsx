import CVComponent from "./pages/cv/CV";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import HomeComponent from './pages/home/Home';
import NavComponent from './components/nav/Nav';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function App() {

  const highChartsOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      title: {
        text: 'Fruit'
      },
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      },
      categories: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  }

  return (
    <Router>
      <NavComponent />
      <div className="body">
        <Switch>
          <Route exact path={["/", "/home"]}>
            <HomeComponent></HomeComponent>
            <HighchartsReact
              highcharts={Highcharts}
              options={highChartsOptions}
            />
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
