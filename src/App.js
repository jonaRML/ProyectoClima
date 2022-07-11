import React, {useState} from 'react';
import Cards from './components/Cards.jsx';
import data from './data.js';
import Nav from './components/Nav.jsx';

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
          setCities(oldCities => [...oldCities, recurso]);
        } else {
          alert("cuidad no encontrada");
        }
      });
  }
  return (
    <div>
      <Nav onSearch={onSearch}/>
      <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
      <hr />
      <div>
        
      </div>
    </div>
  );
}

export default App;
