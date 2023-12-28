import React, { useState } from 'react'

export const Horario = () => {
  const [alexisScheduleVisibility, setAlexisScheduleVisibility] = useState('visible')
  const [fargeScheduleVisibility, setFargeScheduleVisibility] = useState('visible')
  const [mapacheScheduleVisibility, setMapacheScheduleVisibility] = useState('visible')
  const [portalScheduleVisibility, setPortalScheduleVisibility] = useState('visible')

  const handleAlexisScheduleVisibility = () => {
    if (alexisScheduleVisibility === 'visible') {
      setAlexisScheduleVisibility('invisible')
    } else {
      setAlexisScheduleVisibility('visible')
    }
  }

  const handleFargeScheduleVisibility = () => {
    if (fargeScheduleVisibility === 'visible') {
      setFargeScheduleVisibility('invisible')
    } else {
      setFargeScheduleVisibility('visible')
    }
  }

  const handleMapacheScheduleVisibility = () => {
    if (mapacheScheduleVisibility === 'visible') {
      setMapacheScheduleVisibility('invisible')
    } else {
      setMapacheScheduleVisibility('visible')
    }
  }

  const handlePortalScheduleVisibility = () => {
    if (portalScheduleVisibility === 'visible') {
      setPortalScheduleVisibility('invisible')
    } else {
      setPortalScheduleVisibility('visible')
    }
  }

  // TESTING
  //
  //
  //
  //
  //
  //
  //
  //
  //



  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // TESTING

  return (
    <section className='horario'>
      <h2>Horario</h2>

      <div class="filters">
        <div class="person">
          <input onClick={handleAlexisScheduleVisibility} id="box-Alexis" type="checkbox" defaultChecked></input>
          <label for="box-Alexis">Alexis</label>
        </div>
        <div class="person">
          <input onClick={handleFargeScheduleVisibility} id="box-Farge" type="checkbox" defaultChecked></input>
          <label for="box-Farge">Farge</label>
        </div>
        <div class="person">
          <input onClick={handleMapacheScheduleVisibility} id="box-Mapache" type="checkbox" defaultChecked></input>
          <label for="box-Mapache">Mapache</label>
        </div>
        <div class="person">
          <input onClick={handlePortalScheduleVisibility} id="box-Portal" type="checkbox" defaultChecked></input>
          <label for="box-Portal">Portal</label>
        </div>
      </div>

      <div class="schedules">
        <div class="schedule"> {/* Template */}
            <div class="column">
              <div class="row">Horas</div>
              <div class="row">00 - 01</div>
              <div class="row">01 - 02</div>
              <div class="row">02 - 03</div>
              <div class="row">03 - 04</div>
              <div class="row">04 - 05</div>
              <div class="row">05 - 06</div>
              <div class="row">06 - 07</div>
              <div class="row">07 - 08</div>
              <div class="row">08 - 09</div>
              <div class="row">09 - 10</div>
              <div class="row">10 - 11</div>
              <div class="row">11 - 12</div>
              <div class="row">12 - 13</div>
              <div class="row">13 - 14</div>
              <div class="row">14 - 15</div>
              <div class="row">15 - 16</div>
              <div class="row">16 - 17</div>
              <div class="row">17 - 18</div>
              <div class="row">18 - 19</div>
              <div class="row">19 - 20</div>
              <div class="row">20 - 21</div>
              <div class="row">21 - 22</div>
              <div class="row">22 - 23</div>
              <div class="row">23 - 24</div>
            </div>

            <div class="column">
              <div class="row">Lunes</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div class="column">
              <div class="row">Martes</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div class="column">
              <div class="row">Miércoles</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div class="column">
              <div class="row">Jueves</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div class="column">
              <div class="row">Viernes</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div class="column">
              <div class="row">Sábado</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div class="column">
              <div class="row">Domingo</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>
          </div>

        <div className={`schedule Alexis ${alexisScheduleVisibility}`}>  
          <div class="column"> {/* Time */}
            {[...Array(25)].map((index) => (
                <div key={index} className="row"></div>
            ))}
          </div>

          <div class="column"> {/* Monday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Tuesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Wednesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Thursday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Friday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Saturday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Sunday */}
            {[...Array(25)].map((_, index) => (
              ((19 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>
        </div>

        <div className={`schedule Farge ${fargeScheduleVisibility}`}>
          <div class="column"> {/* Time */}
            {[...Array(25)].map((index) => (
                <div key={index} className="row"></div>
            ))}
          </div>

          <div class="column"> {/* Monday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Tuesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Wednesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Thursday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Friday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Saturday */}
            {[...Array(25)].map((_, index) => (
              (0 < index && index <= 24) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Sunday */}
            {[...Array(25)].map((_, index) => (
              (0 < index && index <= 24) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>
        </div>

        <div className={`schedule Mapache ${mapacheScheduleVisibility}`}>
          <div class="column"> {/* Time */}
            {[...Array(25)].map((index) => (
                <div key={index} className="row"></div>
            ))}
          </div>

          <div class="column"> {/* Monday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Tuesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Wednesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Thursday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Friday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Saturday */}
            {[...Array(25)].map((_, index) => (
              (0 < index && index <= 4) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Sunday */}
            {[...Array(25)].map((_, index) => (
              ((0 <= index && index <= 24)) ? (<div key={index} className="row"></div>) : (<div key={index} className="row free"></div>)
            ))}
          </div>
        </div>

        <div className={`schedule Portal ${portalScheduleVisibility}`}>  
          <div class="column"> {/* Time */}
            {[...Array(25)].map((index) => (
                <div key={index} className="row"></div>
            ))}
          </div>

          <div class="column"> {/* Monday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Tuesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Wednesday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Thursday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Friday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Saturday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div class="column"> {/* Sunday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
