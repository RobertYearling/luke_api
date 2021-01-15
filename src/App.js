import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/People';
import Planets from './components/Planets';
import NotFound from './components/NotFound';

function App() {
  const [selected, setSelected] = useState("people");
  const [id, setId] = useState("1");
  const onSubmitHandler = e =>{
      e.preventDefault();
  }
  let link = `/${selected}/${id}`;
  return (
    <>
      <div className="App container-fluid">
        <div className="row">
          <h3>Search for:</h3>
          <form onSubmit={onSubmitHandler} className="">
            <select className="form-control w-50" onChange={ e => setSelected(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label>ID: </label>
            <input type="number" className= "id" onChange={ e => setId(e.target.value)} />
            <Link to={link}><button className="btn-primary">Search</button></Link>
          </form>
        </div>
        <div className="row">
          <Router>
            <Planets path="/planets/:id" />
            <People path="/people/:id" />
            <NotFound path = "*"></NotFound>
          </Router>
        </div>
      </div>
    </>
  );
};
export default App;