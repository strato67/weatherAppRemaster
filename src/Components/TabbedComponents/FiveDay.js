import React, { useEffect, useState } from "react";
import ForecastCard from "./ForecastCard";


const FiveDay = ({fiveForecast, unitConversion}) =>{

    return(<>

    {fiveForecast[0] == 'Not Available' ?  <div className='py-5 text-xl'>{fiveForecast[0]}</div> :
    
        <div className="flex gap-2 py-5 overflow-auto">
            
            {fiveForecast.filter((_,i) => i % 8 == 0).map((dayofWeek)=>{return(<ForecastCard key={fiveForecast.indexOf(dayofWeek)} dayofWeek={dayofWeek} unitConversion={unitConversion}/>)})}
           
        </div>}
        
    </>);

}

export default FiveDay;