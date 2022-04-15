import React, { useState } from "react";
import Caracter from './Caracter.jsx'
export default function Info({persona}) {

if(persona){
  return (

    <div className="info5">{persona.map(persona=>

    <Caracter
            className="caracter"
            name={persona.name}
            genero={persona.genero}
            species={persona.species}
            id ={persona.id}
            key={persona.id}
            image={persona.image}
          /> )}
    
    </div> 
  );
  }
}