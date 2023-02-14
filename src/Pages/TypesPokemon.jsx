
import React, { useEffect,useState } from 'react'

const getData=(url)=>{
    return fetch(url).then((res)=>{
        return res.json();
    })
}

const TypesPokemon = () => {
    const [data,setData]=useState({});
    const[page,setPage]=useState(1);

    useEffect(()=>{
      getData(`https://pokeapi.co/api/v2/type`).then((res)=>{
          console.log(res.results)
          setData(res.results)
 
      }).catch((err)=>{
          console.log(err);
      })
    },[])



  return (
    <>
    
    {
        data && data.map((ele)=>(
            <div key={ele.name}>
                 <h1>{ele.name}</h1>
            <img src={ele.url} alt="type" />
            </div>
            
        ))
    }
  
   
    </>
  )
}

export default TypesPokemon