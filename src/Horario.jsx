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

  return (
    <section className='horario'>
      <h2>Horario</h2>

      <div className="filters">
        <div className="person">
          <input onClick={handleAlexisScheduleVisibility} id="box-Alexis" type="checkbox" defaultChecked></input>
          <label htmlFor="box-Alexis">Alexis</label>
        </div>
        <div className="person">
          <input onClick={handleFargeScheduleVisibility} id="box-Farge" type="checkbox" defaultChecked></input>
          <label htmlFor="box-Farge">Farge</label>
        </div>
        <div className="person">
          <input onClick={handleMapacheScheduleVisibility} id="box-Mapache" type="checkbox" defaultChecked></input>
          <label htmlFor="box-Mapache">Mapache</label>
        </div>
        <div className="person">
          <input onClick={handlePortalScheduleVisibility} id="box-Portal" type="checkbox" defaultChecked></input>
          <label htmlFor="box-Portal">Portal</label>
        </div>
      </div>

      <div className="schedules">
        <div className="schedule"> {/* Template */}
            <div className="column">
              <div className="row">Horas</div>
              <div className="row">00 - 01</div>
              <div className="row">01 - 02</div>
              <div className="row">02 - 03</div>
              <div className="row">03 - 04</div>
              <div className="row">04 - 05</div>
              <div className="row">05 - 06</div>
              <div className="row">06 - 07</div>
              <div className="row">07 - 08</div>
              <div className="row">08 - 09</div>
              <div className="row">09 - 10</div>
              <div className="row">10 - 11</div>
              <div className="row">11 - 12</div>
              <div className="row">12 - 13</div>
              <div className="row">13 - 14</div>
              <div className="row">14 - 15</div>
              <div className="row">15 - 16</div>
              <div className="row">16 - 17</div>
              <div className="row">17 - 18</div>
              <div className="row">18 - 19</div>
              <div className="row">19 - 20</div>
              <div className="row">20 - 21</div>
              <div className="row">21 - 22</div>
              <div className="row">22 - 23</div>
              <div className="row">23 - 24</div>
            </div>

            <div className="column">
              <div className="row">Lunes</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div className="column">
              <div className="row">Martes</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div className="column">
              <div className="row">Miércoles</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div className="column">
              <div className="row">Jueves</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div className="column">
              <div className="row">Viernes</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div className="column">
              <div className="row">Sábado</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>

            <div className="column">
              <div className="row">Domingo</div>
              {[...Array(24)].map((index) => (
                <div key={index} className="row"></div>
              ))}
            </div>
          </div>

        <div className={`schedule Alexis ${alexisScheduleVisibility}`}>  
          <div className="column"> {/* Time */}
            {[...Array(25)].map((index) => (
                <div key={index} className="row"></div>
            ))}
          </div>

          <div className="column"> {/* Monday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Tuesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Wednesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Thursday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Friday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Saturday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (10 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Sunday */}
            {[...Array(25)].map((_, index) => (
              ((19 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>
        </div>

        <div className={`schedule Farge ${fargeScheduleVisibility}`}>
          <div className="column"> {/* Time */}
            {[...Array(25)].map((index) => (
                <div key={index} className="row"></div>
            ))}
          </div>

          <div className="column"> {/* Monday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Tuesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Wednesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Thursday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Friday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 2) || (22 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Saturday */}
            {[...Array(25)].map((_, index) => (
              (0 < index && index <= 24) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Sunday */}
            {[...Array(25)].map((_, index) => (
              (0 < index && index <= 24) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>
        </div>

        <div className={`schedule Mapache ${mapacheScheduleVisibility}`}>
          <div className="column"> {/* Time */}
            {[...Array(25)].map((index) => (
                <div key={index} className="row"></div>
            ))}
          </div>

          <div className="column"> {/* Monday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Tuesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Wednesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Thursday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Friday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 4) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Saturday */}
            {[...Array(25)].map((_, index) => (
              (0 < index && index <= 4) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Sunday */}
            {[...Array(25)].map((_, index) => (
              ((0 <= index && index <= 24)) ? (<div key={index} className="row"></div>) : (<div key={index} className="row free"></div>)
            ))}
          </div>
        </div>

        <div className={`schedule Portal ${portalScheduleVisibility}`}>  
          <div className="column"> {/* Time */}
            {[...Array(25)].map((index) => (
                <div key={index} className="row"></div>
            ))}
          </div>

          <div className="column"> {/* Monday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Tuesday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Wednesday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 24)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Thursday */}
            {[...Array(25)].map((_, index) => (
              ((0 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Friday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Saturday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>

          <div className="column"> {/* Sunday */}
            {[...Array(25)].map((_, index) => (
              ((3 < index && index <= 6) || (12 < index && index <= 18)) ? (<div key={index} className="row free"></div>) : (<div key={index} className="row"></div>)
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
