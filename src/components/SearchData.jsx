import React from 'react'

const SearchData = (props) => {
    const{data}=props

  return (
    <>
      
      <div key={data.id}  >
        <h1>{data?.name}</h1>
          <img src={data?.species?.url} alt="pokemon pic" />
         <p>ID:{data?.id}</p>
        <p>Base Experience:{ data?.base_experience}</p> 
       
      
         <p>Abilities:{
          data?.abilities?.map((ele)=>(
                <span>{ele.ability.name}</span>
            ))
            }</p> 
          <p>Moves:{
          data?.moves?.map((ele)=>(
                <span>{ele.move.name}</span>
            ))
            }</p> 
         <p>Weight:{data?.weight}</p>
         <p>Height:{data?.height}</p>
        </div>


    </>
  )
}

export default SearchData