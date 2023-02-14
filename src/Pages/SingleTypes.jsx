import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'

const SingleTypes = () => {
    const{name}=useParams();
    const[data,setData]=useState({})

    useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/type/${name}`).then((res)=>res.json()).then((res)=>{
          console.log(res)
          setData(res);
      }).catch((err)=>{
          console.log(err)
      })
    },[name])
  return (
    <>
    <h1>{data.name}</h1>
    {
         data?.moves?.map((ele)=>(
            <span>{ele.name}</span>
        ))
    }
    </>
  )
}

export default SingleTypes