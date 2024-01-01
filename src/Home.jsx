import React from 'react'

export const Home = () => {
  return (
    <section className='home'>
        {/* <h2>Home</h2>
        <div className="content">
          <p>Página en construcción</p>
          <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/snorlax.gif?alt=media&token=bbf5cee0-e796-4777-bc00-0b2cd99023aa&_gl=1*1pconwr*_ga*Mzg5Mjk2OTcuMTY5Njg4OTA0Mg..*_ga_CW55HF8NVT*MTY5NjkwMDM4OC4yLjEuMTY5NjkwMDQ0Ny4xLjAuMA.." title='Sleeping Snorlax GIF' alt="Sleeping Snorlax GIF" />
        </div> */}
        <div className='members'>
          <div className='member'> {/* Alexis */}
            <div className="member-title">
              <h3>Alexis</h3>
              <h4>drogadicto</h4>
            </div>
            <div className="member-description">
              <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Alexis%200.png?alt=media&token=4e3c44b3-f4f5-4e8d-8aa1-c6175fcc9a05" alt="foto del zonzo" title="foto del zonzo" />
              <div>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='member'> {/* Farge */}
            <div className="member-title">
              <h3>Farge</h3>
              <h4>estúpido</h4>
            </div>
            <div className="member-description">
              <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Farge%200.jpg?alt=media&token=ee58c62f-3cc3-4b5a-bcd1-b1c59f23f1e8" alt="foto del zonzo" title="foto del zonzo" />
              <div>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='member'> {/* Mapache */}
            <div className="member-title">
              <h3>Mapache</h3>
              <h4>kchudo</h4>
            </div>
            <div className="member-description">
              <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Mapache%200.png?alt=media&token=41b5be21-de33-4665-bf43-e09c634c6460" alt="foto del zonzo" title="foto del zonzo" />
              <div>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='member'> {/* Portal */}
            <div className="member-title">
              <h3>Portal</h3>
              <h4>alcohólico</h4>
            </div>
            <div className="member-description">
              <img src="https://firebasestorage.googleapis.com/v0/b/padre-domingo.appspot.com/o/Portal%200.jpg?alt=media&token=1526f3d1-e3ef-469c-a149-fc93249dbccc" alt="foto del zonzo" title="foto del zonzo" /> 
              <div>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
