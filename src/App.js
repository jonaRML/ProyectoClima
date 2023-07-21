import React, {useState} from 'react';
import Cards from './components/Cards.jsx';
import data from './data.js';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Ciudad from './components/Cuidad.jsx'
import {Routes, Route }from 'react-router-dom';
import Swal from 'sweetalert2';
function App() {
  const [cities, setCities] = useState(data);

  function onClose(id) {
    setCities(cities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    //[Londres, Cairns, Denver];

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          setCities(oldCities => {
            if(oldCities.find(el=> el.id === recurso.id)){
              Swal.fire(
                'city exits already',
                'try again'
              )
              return oldCities;
            }else{
             return [...oldCities, recurso]
            }
            
          });
        } else {
          Swal.fire(
            {
              icon: 'error',
              title: 'City not found',
              text: 'try with another city',
            }
          )
        }
      });
  }

  return (
    <div>

      <Nav onSearch={onSearch}/>

      <Routes>
        <Route path='/' element={<Cards cities={cities}onClose={onClose}/>} />
        
        <Route path='about' element={<About/>}  />
     
        <Route
        path="ciudad/:ciudadId"
        element={<Ciudad city={cities}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
