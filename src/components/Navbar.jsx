import React from 'react'
import {Link,NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <ul style={{display:"flex",justifyContent:"space-between",alignItems:"center",textDecoration:"none" ,height:"40px",backgroundColor:"yellow"}}>
        <li><NavLink to="/pokemon">Pokemon</NavLink></li>
        <li><NavLink to="/types">Types</NavLink></li>
        <li><NavLink to="favorites">Favourite</NavLink></li>
    </ul>

    </>
  
  )
}

export default Navbar