import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { Route,Routes, HashRouter as Router } from 'react-router-dom';
import Info from './Info.jsx'
import Carta from './Carta.js'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <Router>
   <Routes>

    <Route path="/" element={<App/>} >
   
    //<Route path="/personajes" element={<Info/>}/>
    </Route>
    <Route path="Card/:id" element={<Carta />}/>
   
   </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
