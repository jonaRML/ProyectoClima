import React from 'react';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  let array = props.cities;

  let items = array.map(el=>    
        <Card 
          key={el.id}        
          max={el.main.temp_max}
          min={el.main.temp_min}
          id={el.id}
          name={el.name}
          img={el.weather[0].icon}
          onClose={props.onClose}
        />
  );

  return (
    <div className={s.contenedor}>
        {items}
    </div>
      
    
  )
};