import React from "react";
import { useParams } from "react-router-dom";
import s from './Cuidad.module.css'

export default function Ciudad({city}) {
    
    let [obj] = city.filter(c => c.id === parseInt(useParams().ciudadId));

    console.log(useParams())
    return (
        <div className={s.ciudad}>
                <div className='container'>
                    <h1>{obj.name}</h1>
                    <div className={s.flex}>
                     <div className="info">
                        <div className={s.texto}>Temperatura: {obj.main.temp}ºC</div>
                        <div className={s.texto}>Clima: {obj.weather[0].main}</div>
                        <div className={s.texto}>Viento: {obj.wind.speed} km/h</div>
                        <div className={s.texto}>Cantidad de nubes: {obj.clouds.all}</div>
                        <div className={s.texto}>Latitud: {obj.coord.lon}º</div>
                        <div className={s.texto}>Longitud: {obj.coord.lat}º</div>
                        <div className={s.texto}>Sensacion Termica: {obj.main.feels_like}º</div>
                     </div>

                     <div>
                        <img src={`http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`} alt="icono"/>
                     </div>
                    </div>
            </div>
        </div>
    )
}