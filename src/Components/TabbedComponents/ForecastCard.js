import React from "react";
import {unitCalculation} from './../../unitConvert';

const ForecastCard = ({dayofWeek, unitConversion})=>{

    const dateFormat = (date) =>{
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {weekday:'short',month:'short',day:'2-digit'});
    }

    return(<>
        <div className="rounded bg-base-100 px-5 py-6 shrink-0 grow">
            <p>{dateFormat(dayofWeek.dt_txt)}</p>
            <div className="flex justify-center"><img src={`http://openweathermap.org/img/w/${dayofWeek.weather[0].icon}.png`}/></div>
            <p>{dayofWeek.weather[0].main}</p>
            <div className="divider"></div> 
            <p>{unitCalculation(dayofWeek.main.temp,unitConversion)}</p>


        </div>
    </>);

}

export default ForecastCard;
