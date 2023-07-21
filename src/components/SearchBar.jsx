import React,{useState} from 'react';
import s from './SearchBar.module.css';

export default function SearchBar(props) {
  const [city,setCity] = useState('');

  const handleChange =(e)=>{

    setCity(e.target.value)
  }
  
  const handlerSubmit = (e)=>{
    e.preventDefault();
    props.onSearch(city); 
    setCity("")
  }  
  return (
    <form className={s.contenedor} onSubmit={handlerSubmit}>
      <input className={s.input} type="search" placeholder='city...' value={city} onChange={handleChange}/>
      <input type='submit'className={s.boton} value='Search'/>
    </form>
  )
};
