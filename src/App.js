import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/layouts/Dashboard';
import NavBar from './components/layouts/NavBar';
import dittos from '../src/images/dittos.png';
import Pokemon from './components/pokemon/Pokemon';


function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${dittos})`}}>  
      <NavBar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
