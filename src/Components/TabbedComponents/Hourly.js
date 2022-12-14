import React from "react";
import ForecastCard from "./ForecastCard";

const Hourly = ({hourlyForecast, unitConversion})=>{

    const modifyTime=(array)=>{
        let modfiedArr = array.slice(0,8);

        //Will need to create seperate component to handle ForecastCard for hourly. OR, move function for date time out of forecast component, shift function to parent hourly and fiveday Creating instability switching between cards
        /*modfiedArr.forEach(e => {
            let formattedDate = new Date(e.dt_txt);
            e.dt_txt= formattedDate.toLocaleTimeString('en-US');
        });*/

        return modfiedArr;
    }

    return(<>
    
    {hourlyForecast[0] == 'Not Available' ?  <div className='py-5 text-xl'>{hourlyForecast[0]}</div> :
    
    <div className="flex gap-2 py-5 overflow-x-auto">
        
        {modifyTime(hourlyForecast).map((dayofWeek)=>{return(<ForecastCard key={hourlyForecast.indexOf(dayofWeek)} dayofWeek={dayofWeek} unitConversion={unitConversion}/>)})}
       
    </div>}
    
    
    </>);
}

export default Hourly;
