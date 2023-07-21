import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from'./Nav.module.css';
import {NavLink, useLocation} from 'react-router-dom';


function Nav({onSearch}) {

  const location = useLocation();

  let activeStyle = {
    textDecoration: "underline",
    color:'rgb(3, 190, 159)',
    fontWeight:'700'
  };
  return (
    <>
    <nav className={s.nav}>
        <section className={s.contenedor}>
             <img src={Logo} className={s.img} alt=''/>
            <strong className={s.strong}>
                Henry Weather-App
            </strong> 
           <NavLink className={s.strong} style={({ isActive }) =>isActive ? activeStyle : undefined}to='/'>home</NavLink>
           <NavLink className={s.strong} style={({ isActive }) =>isActive ? activeStyle : undefined}to='/about'>about</NavLink>
          
        </section>
        <nav>
          
        </nav>

        {location.pathname === '/' && <SearchBar className={s.searchBar} onSearch={onSearch}></SearchBar>} 
        </nav>
    </>
    
  );
};

export default Nav;
