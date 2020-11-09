import React from 'react';
import './Components/Styles/App.css';
import Welcome from './Components/welcome';
import Login from './Components/login';
import Main from './Components/main';
import NewNote from './Components/newNote';
import Nav from './Components/nav';
import Message from './Components/message';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      {/* <Message /> */}
      <Switch>
        <Route path="/" exact component={Welcome}/>
        <Route path="/home" component={Main}/>
        <Route path="/login" component={Login} />
        <Route path="/newNote" component={NewNote} />
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;