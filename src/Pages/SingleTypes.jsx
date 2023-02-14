import React, { useEffect ,useState} from 'react'
import { useParams,Link } from 'react-router-dom'

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
    <div  style={{width:"60%",margin:"auto",border:"1px solid red",boxShadow: "10px 5px 5px red"}}>
    <Link to="/types">Go back</Link>
    <h1>{data.name}</h1>
    {
         data?.moves?.map((ele)=>(
            <span>{ele.name}</span>
        ))
    }
    </div>

    </>
  )
}

export default SingleTypes