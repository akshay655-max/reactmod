import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"

const getData=(url)=>{
    return fetch(url).then((res)=>{
        return res.json();
    })
}

const Pokemon = () => {
    const [data,setData]=useState([]);
    const[page,setPage]=useState(1);
    const[count,setCount]=useState("")
    const limit=20

    useEffect(()=>{
      getData(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`).then((res)=>{
          console.log(res)
          setCount(res.count)
          setData(res.results)
      }).catch((err)=>{
          console.log(err);
      })
    },[page])



  return (
    <>
    <h1>List of pokemon</h1>
    {
        data && data.map((ele)=>(
            <div>
                <p>{ele.name}</p>
                <img src={ele.url} alt="pokeman-pic" />
                <p><Link to={`/pokemon/${ele.name}`}> More details</Link></p>
            </div>
        ))
    }
    <button  disabled={page===1}onClick={()=>setPage(page-1)}>Prev</button>
    <button>{page}</button>
    <button disabled={page===(Math.ceil(count/limit))}  onClick={()=>setPage(page+1)}>Next</button>
    </>
  )
}

export default Pokemon