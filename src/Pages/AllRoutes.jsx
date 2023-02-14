import React from 'react'
import { Route,Routes } from "react-router-dom";
import Favourite from './Favourite';
import Pokemon from './Pokemon';
import SinglePokemon from './SinglePokemon';
import SingleTypes from './SingleTypes';
import TypesPokemon from './TypesPokemon';

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/pokemon" element={<Pokemon/>}/>
        <Route path="/types" element={<TypesPokemon/>}/>
        <Route path="/favorites" element={<Favourite/>}/>
        <Route path="/pokemon/:name" element={<SinglePokemon/>}/>
        <Route path="/types/:name" element={<SingleTypes/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes

