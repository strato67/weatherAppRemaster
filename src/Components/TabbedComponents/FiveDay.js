import React from "react";
import ForecastCard from "./ForecastCard";


const FiveDay = ({fiveForecast, unitConversion}) =>{
    
    const dateFormat = (date) =>{
        const d = new Date(date);
        if(isNaN(d)){
            return date;
        }

        return d.toLocaleDateString("en-US", {weekday:'short',month:'short',day:'2-digit'});
    }

    return(<>

    {fiveForecast[0] == 'Not Available' ?  <div className='py-5 text-xl'>{fiveForecast[0]}</div> :
    
        <div className="flex gap-2 py-5 overflow-x-auto">
            
            {fiveForecast.filter((_,i) => i % 8 == 0).map((dayofWeek)=>{return(<ForecastCard key={fiveForecast.indexOf(dayofWeek)} dayofWeek={dayofWeek} unitConversion={unitConversion} date={dateFormat(dayofWeek.dt_txt)}/>)})}
           
        </div>}
        
    </>);

}

export default FiveDay;