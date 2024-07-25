import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css';
import Menu from "./Menu";
import {BrowserRouter as Router,Route} from 'react-router-dom'



 {/* import logo from './logo.svg';
  import './App.css';

function App() {
  return (
    <div className="App">
   
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
     
       <h1>hello worls</h1>
    </div>
  );
}

export default App;
*/ }


// function App(){
//   return (
//   <div>
//     <box></box>
//   </div>);
// }

function App(){
  return (
    <div className="App">
      <h1>React Rounder Dom</h1>
      <Router>
        <Route>
           
           <Route exact path="/menu" element={<Menu/>}/>
        </Route>
      </Router>
    </div>
  );
}
export default App;