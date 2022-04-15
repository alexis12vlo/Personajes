 
import React ,  { useState } from 'react';
import axios from 'axios';
import Cartas from './Cartas.jsx'
import { useParams } from 'react-router-dom';
 function Carta(){
  const {id}=useParams();
  const [carta, setCarta]=useState('');
   
          axios.get(`https://rickandmortyapi.com/api/character/${id}`)
          .then(res => {
        
          const cartas = {
          name : res.data.name,
          id : res.data.id,
          species : res.data.species,
          image : res.data.image,
          genero : res.data.gender,
          location : res.data.location.name
          }
        
       
        setCarta(cartas)
        
          
          })
        
       
        return (
           <div className="info5">

          <Cartas
            className="carta"
            name={carta.name}
            genero={carta.genero}
            species={carta.species}
            id ={carta.id}
            key={carta.id}
            image={carta.image}
            location={carta.location}
          />
    
          </div> 



          ) ;
}
export default Carta;