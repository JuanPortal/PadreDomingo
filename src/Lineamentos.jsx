import React from 'react'

export const Lineamentos = () => {
  return (
    <section className='lineamentos'>
        <h2>Lineamentos</h2>
        <ol>
          <li>El integrante que se conecta a la llamada virtual<sup>1</sup> tiene que empezar la conversación saludando dependiendo la hora en Perú. En caso de no realizarlo, se procederá a ignorar al sujeto hasta que salude. Aplica cada vez que se entra a la llamada así sea el mismo día o cambie de dispositivo.</li>
          <li>En caso de desacuerdo sobre cualquier tema se usará ChatGPT como mediador imparcial para dicho desacuerdo. Su decisión es totalmente irrefutable e innegociable (caso cerrado). Este medio solo se puede usar cuando no se use la democracia<sup>2</sup>.</li>
          <li>La constitución sólo se cambiará cuando estén los integrantes completos presentes. El voto de los integrantes originales vale el doble.</li>
        </ol>
        <h3>Apéndice</h3>
        <ol>
          <li>Virtual: se refiere a todo lo que necesariamente implique el uso de internet.</li>
          <li>Democracia: se refiere al acto de votar en grupo con los integrantes presentes en el momento. si alguien no está presente su opinión no importa.</li>
        </ol>
        <div className="pseudo-footer">
          <p>La constitución entrará en vigencia a partir del 9 de octubre de 2023 a las 14:45 hora Perú</p>
          <p>Última revisión: 9 de octubre de 2023</p>
        </div>
    </section>
  )
}
