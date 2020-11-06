import React from 'react';
import './Components/Styles/App.css';
import Login from './Components/login';
import Main from './Components/main';
import NewNote from './Components/newNote';
import Nav from './Components/nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Main}/>
        <Route path="/login" component={Login} />
        <Route path="/newNote" component={NewNote} />
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;