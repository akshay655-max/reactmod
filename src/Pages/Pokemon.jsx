import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import SearchData from '../components/SearchData';

const getData=(url)=>{
    return fetch(url).then((res)=>{
        return res.json();
    })
}

const Pokemon = () => {
    const [data,setData]=useState([]);
    const[page,setPage]=useState(1);
    const[count,setCount]=useState("")
    const[name,setName]=useState("")
    const[singledata,setSingleData]=useState()
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false)
    const limit=20

    useEffect(()=>{
        let url=`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`;
      
        if(name){
            setData("");
            getData(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res)=>{
                console.log(res)
                setLoading(true);
                setError(false);
                setSingleData(res)
                setLoading(false);
            }).catch((err)=>{
                setLoading(false);
                setError(true);
                console.log(err)
            })
        }else{
            setLoading(true)
            setTimeout(()=>{
                getData(url).then((res)=>{
                    setError(false);
                    setCount(res.count)
                    setData(res.results)
                    setLoading(false);
                }).catch((err)=>{
                    setLoading(false);
                    setError(true);
                    console.log(err);
                    
                })
            },1000)
         
        }
     
    },[page,name])

    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <>
    <h1>List of pokemon</h1>
    <form  onSubmit={(e)=>e.preventDefault()}>
    <input type="text" placeholder='search here' value={name} onChange={(e)=>setName(e.target.value)} />
    </form>
    {
        error && <h1>data not found</h1>
    }

  
    {
        data && data.map((ele)=>(
            <div key={ele.name} style={{width:"40%",margin:"auto",marginTop:"10px",boxShadow: "10px 5px 5px red"}}>
                <h1>{ele.name}</h1>
                <img src={ele.url} alt="pokeman-pic" />
                <p><Link to={`/pokemon/${ele.name}`}> More details</Link></p>
            </div>
        ))
    }

    {
        singledata && <SearchData data={singledata}/>
    }
   

  
     <button  disabled={page===1}onClick={()=>setPage(page-1)}>Prev</button>
     <button>{page}</button>
     <button disabled={page===(Math.ceil(count/limit))}  onClick={()=>setPage(page+1)}>Next</button>

    </>
    
  )
}

export default Pokemon