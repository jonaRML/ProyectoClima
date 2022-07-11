import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from'./Nav.module.css';


function Nav({onSearch}) {
  return (
    <>
    <nav className={s.nav}>
        <section className={s.contenedor}>
             <img src={Logo} className={s.img} alt=''/>
            <strong className={s.strong}>
                Henry Weather-App
            </strong> 
            <SearchBar className={s.searchBar} onSearch={onSearch}></SearchBar>
        </section>
            
        </nav>
    </>
    
  );
};

export default Nav;
