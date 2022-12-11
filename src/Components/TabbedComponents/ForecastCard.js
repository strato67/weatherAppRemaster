import React from "react";
import {unitCalculation} from './../../unitConvert';

const ForecastCard = ({dayofWeek, unitConversion})=>{

    const dateFormat = (date) =>{
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {weekday:'short',month:'short',day:'2-digit'});
    }

    return(<>
        <div className="rounded bg-base-100 px-5 py-8 shrink-0">
            <p>{dateFormat(dayofWeek.dt_txt)}</p>
            <div className="divider"></div> 
            <p>{unitCalculation(dayofWeek.main.temp,unitConversion)}</p>


        </div>
    </>);

}

export default ForecastCard;
