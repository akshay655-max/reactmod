import React, { useEffect ,useState} from 'react'
import { useParams,Link } from 'react-router-dom'



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
    <Link></Link>
    <h1>pokemon</h1>
 
  
  

<div style={{width:"60%",margin:"auto",border:"1px solid red",boxShadow: "10px 5px 5px red"}} >
    <Link to="/pokemon">Go back</Link>
        <h1>{props?.name}</h1>
          {/* <img src={props?.species.url} alt="pokemon pic" /> */}
         <p>ID:{props?.id}</p>
        <p>Base Experience:{ props?.base_experience}</p> 
       
      
         <p>Abilities:{
          props?.abilities?.map((ele)=>(
                <span>{ele.ability.name}</span>
            ))
            }</p> 
          <p>Moves:{
          props?.moves?.map((ele)=>(
                <span>{ele.move.name}</span>
            ))
            }</p> 
         <p>Weight:{props?.weight}</p>
         <p>Height:{props?.height}</p>
        </div>



   

   

    
    </>
  )
}

export default SinglePokemon