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
    const[singledata,setSingleData]=useState("")
    const limit=20

    useEffect(()=>{
      getData(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${page}`).then((res)=>{
          setCount(res.count)
          setData(res.results)
      }).catch((err)=>{
          console.log(err);
      })
    },[page])

    const handleSearch=()=>{
        setData("");
        if(name){
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res)=>{
           
            return res.json();
        }).then((res)=>{
            console.log(res)
            setSingleData(res);
           
        }).catch((err)=>{
            console.log(err)
        })
        }else{
            alert("please fill the input fields")
        }
       
    }



  return (
    <>
    <h1>List of pokemon</h1>
    <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
    <button onClick={handleSearch}>Search</button>
    {
        data && data.map((ele)=>(
            <div>
                <p>{ele.name}</p>
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