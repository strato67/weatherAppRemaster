import React from "react";
import ForecastCard from "./ForecastCard";

const Hourly = ({hourlyForecast, unitConversion})=>{

    const timeFormat = (time) =>{
        const d = new Date(time);
        if(isNaN(d)){
            return date;
        }

        return d.toLocaleTimeString('en-US');
    }

    return(<>
    
    {hourlyForecast[0] == 'Not Available' ?  <div className='py-5 text-xl'>{hourlyForecast[0]}</div> :
    
    <div className="flex gap-2 py-5 overflow-x-auto">

        {hourlyForecast.slice(0,8).map((dayofWeek)=>{return(<ForecastCard key={hourlyForecast.indexOf(dayofWeek)} dayofWeek={dayofWeek} unitConversion={unitConversion} date={timeFormat(dayofWeek.dt_txt)}/>)})}
       
    </div>}
    
    
    </>);
}

export default Hourly;
