import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'



const SinglePokemon = () => {
    const [props,setProps]=useState({})
    const{name}=useParams();
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res)=>{
           
            return res.json();
        }).then((res)=>{
            console.log(res)
            setProps(res);
        })
    
    },[]);

 
  return (
    <>
    <h1>pokemon</h1>
 
  
  

<div >
        <h1>{ props && props.name}</h1>
         <img src={  props && props.species.url} alt="pokemon pic" />
         <p>ID:{ props && props.id}</p>
        <p>Base Experience:{ props && props.base_experience}</p> 
      
      
        <p>Abilities:{
           props &&   props.abilities.map((ele)=>(
                <span>{ele.ability.name}</span>
            ))
            }</p> 
         <p>Moves:{
          props &&    props.moves.map((ele)=>(
                <span>{ele.move.name}</span>
            ))
            }</p> 
         <p>Weight:{ props && props.weight}</p>
         <p>Height:{ props && props.height}</p>
        </div>



   

   

    
    </>
  )
}

export default SinglePokemon