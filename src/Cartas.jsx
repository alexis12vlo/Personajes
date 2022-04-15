import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import Carta from './Carta.js';
export default function Cartas({location,name,id,image,species,genero}) {


  return (
    <div>


   
    <div  className="caracter_tarjeta_2">
      <div className="caracter_tarjeta_imagen_2">
        <div className="imagen_2_2">
          <img src={image} alt=""/>
        </div>
      </div>
      <div className="caracter_tarjeta_info_2">
        <div className="info12">
          <h3>Nombre : </h3>
          <h2>{name}</h2>
        </div>
        <div className="info12">
          <h3>Especie :</h3>
          <h2>{species}</h2>
        </div>
        <div className="info12">
          <h3>Genero :</h3>
          <h2>{genero}</h2>
        </div>

        <div className="info12">
          <h3>Ubicacion :</h3>
          <h2>{location}</h2>
        </div>
        <br></br>
        <div>
    
        </div>
        
      </div>
    </div>
    <div className="botonatras">
    <Link to="/" ><button className="atras" >VOLVER</button></Link>
    </div> 
    </div>
  );
}