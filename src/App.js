import React from 'react';

import { Switch,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Add from './component/Add';
import Edit from './component/Edit';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
     
      <Navbar />
      <Switch>
        <Route exact path='/'component={()=><Home/>} /> 
        <Route path="/add"><Add/></Route>
        <Route path='/edit/:id' component={()=><Edit/>}/>
      </Switch>
     
    </div>
  );
}

export default App;
