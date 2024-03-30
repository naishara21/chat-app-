import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
import Home from './Home.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Define routes using Switch */}
      <Switch>
        {/* Route for the Home component */}
        <Route path="/home" component={Home} exact />
        {/* Route for the Homepage component */}
        <Route path="/homepage" component={Homepage} />
        {/* Route for the Chatpage component */}
        <Route path="/chats" component={Chatpage} />
      </Switch>
    </div>
  );
}

export default App;
