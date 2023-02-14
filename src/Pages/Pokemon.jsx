import React, { useEffect,useState } from 'react'
import {Link, useSearchParams} from "react-router-dom"
import SearchData from '../components/SearchData';

const getData=(url)=>{
    return fetch(url).then((res)=>{
        return res.json();
    })
}
const getpagefromurl=(value)=>{
    value=Number(value);
    if(typeof value==="number" && value<=0){
        value=1;
    }
    if(!value){
        value=1;
    }
    return value;

}

const Pokemon = () => {
    const[searchparams,setSearchparams]=useSearchParams();
    const [data,setData]=useState([]);
    const initialPage=getpagefromurl(searchparams.get("offset"))
    const[page,setPage]=useState(initialPage);
    const[count,setCount]=useState("")
    const[name,setName]=useState("")
    const[singledata,setSingleData]=useState()
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false)
    const limit=10

    useEffect(()=>{
        let url=`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`;
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
     
    },[page])

    useEffect(()=>{
        let paramObj;
          if(page){
            paramObj={
                limit,
                offset:page
            }
        }
       
         setSearchparams(paramObj)
    },[page])


    const handleClick=()=>{
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
    }

    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <>
    <h1>List of pokemon</h1>
  
    <input type="text" placeholder='search here' value={name} onChange={(e)=>setName(e.target.value)} />
   <button onClick={handleClick} ><Link to={`/pokemon/${name}`}>Search</Link> </button>
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
   

  {
      name==="" &&  <>
       <button  disabled={page===1}onClick={()=>setPage(page-1)}>Prev</button>
      <button>{page}</button>
      <button disabled={page===(Math.ceil(count/limit))}  onClick={()=>setPage(page+1)}>Next</button>
      
      </>
     
  }
    
     

    </>
    
  )
}

export default Pokemon