import React from 'react'
import { Home } from './Home'
import { Reglamento } from './Reglamento'
import { Horario } from './Horario'
import { Routes, Route } from 'react-router-dom'

export const PadreDomingo = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/reglamento' element={<Reglamento />}/>
        <Route path='/lineamentos' element={<Reglamento />}/>
        <Route path='/decalogo' element={<Reglamento />}/>
        <Route path='/reglas' element={<Reglamento />}/>
        <Route path='/horario' element={<Horario />}/>
      </Routes>
    </>
  )
}

