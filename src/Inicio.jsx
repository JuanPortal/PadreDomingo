import React from 'react'

export const Inicio = () => {
  return (
    <section className='inicio'>
        <div className='members'>
          <div className='member'> {/* Alexis */}
            <div className="member-title">
              <h3><img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Alexis%20(1).png?alt=media&token=ae2e7765-19d2-4ebb-83fb-f4405f80deae" title="emblema" alt="emblema" />Alexis</h3>
              <h4>drogadicto</h4>
            </div>
            <div className="member-description">
              <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Alexis%200.png?alt=media&token=4e3c44b3-f4f5-4e8d-8aa1-c6175fcc9a05" alt="foto del zonzo" title="foto del zonzo" />
                <ul>
                  <li>Solo está comprometido con la marihuana</li>  {/* Farge */}
                  <li>Le vacilan las flacas con mirada panorámica</li>  {/* Mapache */}
                  <li>Se tira la pera y le roban</li>  {/* Portal */}
                </ul>
            </div>
          </div>
          <div className='member'> {/* Farge */}
            <div className="member-title">
              <h3>Farge<img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Farge%20(1).png?alt=media&token=ebd3ae9b-3c06-4050-b161-ea3d7ec37996" title="emblema" alt="emblema" /></h3>
              <h4>estúpido</h4>
            </div>
            <div className="member-description">
              <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Farge%200.jpg?alt=media&token=ee58c62f-3cc3-4b5a-bcd1-b1c59f23f1e8" alt="foto del zonzo" title="foto del zonzo" />
                <ul>
                  <li>Le va bien en su chamba... la empresa quiebra</li>  {/* Alexis */}
                  <li>Crea una empresa... Se la expropian</li>  {/* Mapache */}
                  <li>Le robaron 3 celulares en un año por adicto</li>  {/* Portal */}
                </ul>
            </div>
          </div>
          <div className='member'> {/* Mapache */}
            <div className="member-title">
              <h3><img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Mapache%20(1).png?alt=media&token=a80912c2-9b75-4486-bd9a-5fb4f9a746f1" title="emblema" alt="emblema" />Mapache</h3>
              <h4>kchudo</h4>
            </div>
            <div className="member-description">
              <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Mapache%200.png?alt=media&token=41b5be21-de33-4665-bf43-e09c634c6460" alt="foto del zonzo" title="foto del zonzo" />
                <ul>
                  <li>Su fla le invita a comer... él paga</li>  {/* Alexis */}
                  <li>"Más vale kchudo en mano que Palermo volando" D.S.</li>  {/* Farge */}
                  <li>No hay más ciego que quien no quiere ver</li>  {/* Portal */}
                </ul>
            </div>
          </div>
          <div className='member'> {/* Portal */}
            <div className="member-title">
              <h3>Portal<img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Portal%20(1).png?alt=media&token=1e73f5d1-dad6-438a-b7aa-a72e9d005b3d" title="emblema" alt="emblema" /></h3>
              <h4>alcohólico</h4>
            </div>
            <div className="member-description">
              <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Portal%200.jpg?alt=media&token=1526f3d1-e3ef-469c-a149-fc93249dbccc" alt="foto del zonzo" title="foto del zonzo" /> 
                <ul>
                  <li>Su "saliente" no le contesta... se kcha a una gordita</li>  {/* Alexis */}
                  <li>Degenerado y alcohólico? Obvio no tuvo viejo</li>  {/* Farge */}
                  <li>Le sigue el juego a su causa, termina con la muñeca rota</li>  {/* Mapache */}
                </ul>
            </div>
          </div>
        </div>
    </section>
  )
}
