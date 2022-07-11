import React,{useState} from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  const [city,setCity] = useState('');

  const handleChange =(e)=>{
    setCity(e.target.value)
  }

  return (
    <div className={s.contenedor}>
      <input className={s.input} type="text" placeholder='cuidad...' onChange={handleChange}/>
      <button className={s.boton} onClick={()=>props.onSearch(city)}>Search</button>
    </div>
  )
};
