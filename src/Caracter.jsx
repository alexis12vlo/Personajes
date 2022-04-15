import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import Carta from './Carta.js'
import Cartas from './Cartas.jsx'
export default function Caracter({name,id,image,species,genero}) {
    
  return (
    <div  className="caracter_tarjeta">
      <div className="caracter_tarjeta_imagen">
        <div className="imagen">
          <img src={image} alt=""/>
        </div>
      </div>
      <div className="caracter_tarjeta_info">
        <div className="info1">
          <h1>{name}</h1>
        </div>
        <br></br>
        <div>
        <Link to={`Card/${id}`}><button className="boton">Ver mas</button></Link>
        </div>
        
      </div>
    </div> 
  );
}