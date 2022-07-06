import React from 'react';

export default function Card(props) {
  // acá va tu código
  let img = props.img;
  let url =`http://openweathermap.org/img/wn/${img}@2x.png`
  return (
  <>
  <button onClick={props.onClose}>x</button>
  <h2>{props.name}</h2>
  <nav>
    <h4>min</h4>
    <h5>{props.min}</h5>
    <h4>max</h4>
    <h5>{props.max}</h5>
  </nav>
  <img src={url} alt="logo" />
  </>
  )
};