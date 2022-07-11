import React from 'react';
import s from './Card.module.css';
export default function Card(props) {
  // acá va tu código
  let img = props.img;
  let id =props.id;
  let url =`http://openweathermap.org/img/wn/${img}@2x.png`
  return (
  <div className={s.card}>
  <div className={s.head}>
    <button className={s.boton} onClick={()=> props.onClose(id)}>x</button>
    <h2 className={s.titulo}>{props.name}</h2>
  </div>
  
  <div className={s.temp}>
    <div>
        <h4>min</h4>
        <h5>{props.min}</h5>
    </div>
    <div>
        <h4>max</h4>
        <h5>{props.max}</h5>
    </div>
    <img src={url} alt="logo" />
  </div>
  
  </div>
  )
};