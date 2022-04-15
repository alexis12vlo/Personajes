import logo from './logo.svg';
import './App.css';
import React ,  { useState } from 'react';
import axios from 'axios';
import Info from './Info.jsx'
import imagen from './imagenn.png'
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
 function App() {
  const [persona, setPersona]=useState('');
  var prs=[]
        function Buscar(){
        for(var i=1 ; i<=30 ; i++){
          axios.get(`https://rickandmortyapi.com/api/character/${i}`)
          .then(res => {
        
          const personas = {
          name : res.data.name,
          id : res.data.id,
          species : res.data.species,
          image : res.data.image,
          genero : res.data.gender
          }
        
       
        setPersona(oldCities => [...oldCities,personas])
        prs=persona;
        console.log(prs);
          })
        }
        }
    
    
  return (
      <div className="App">
      <header className="App-header">
        <div className="imagenportada">
        <img src={imagen} alt=""/>
        <Link to="/personajes"><button className="buscar"onClick={Buscar}>Buscar Personaje</button></Link>
      </div>
        
      <br></br>
        <Info persona={persona}></Info>
        
      </header>
    </div>
  );
}

export default App;
