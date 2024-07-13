import React from 'react'
import { Header } from './Header'
import { Inicio } from './Inicio'
import { Lineamentos } from './Lineamentos'
import { Horario } from './Horario'
import { PPT } from './PPT'
import { Juegos } from './Juegos'
import { Routes, Route } from 'react-router-dom'

export const PadreDomingo = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/lineamentos' element={<Lineamentos />}/>
        <Route path='/reglamento' element={<Lineamentos />}/>
        <Route path='/decalogo' element={<Lineamentos />}/>
        <Route path='/reglas' element={<Lineamentos />}/>
        <Route path='/constitucion' element={<Lineamentos />}/>
        <Route path='/horario' element={<Horario />}/>
        <Route path='/ppt' element={<PPT />}/>
        <Route path='/juegos' element={<Juegos />}/>
      </Routes>
    </>
  )
}

