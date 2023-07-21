import React from "react";
import s from './About.module.css'

export default function About(){
    return(
        <>
            <h1 className={s.h1}>Mi primer proyecto web</h1>
            <pre className={s.pre}>
                {
                    `
            Este es mi primer proyecto web basado
            basado en las siguientes tecnolias
            -JavaScript
            -React
            -Css modules
            -Git
                    `
                }        
            </pre>
        </>
    )    
}