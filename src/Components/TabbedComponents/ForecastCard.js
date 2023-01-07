import React from "react";
import {unitCalculation} from './../../unitConvert';

const ForecastCard = ({dayofWeek, unitConversion, date})=>{

    return(<>
        <div className="rounded bg-base-100 px-5 py-6 shrink-0 grow">
            <p>{date}</p>
            <div className="flex justify-center"><img src={`http://openweathermap.org/img/w/${dayofWeek.weather[0].icon}.png`}/></div>
            <p>{dayofWeek.weather[0].main}</p>
            <div className="divider"></div> 
            <p>{unitCalculation(dayofWeek.main.temp,unitConversion)}</p>


        </div>
    </>);

}

export default ForecastCard;
