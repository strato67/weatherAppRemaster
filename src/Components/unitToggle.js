import React, { useState } from "react";

const UnitToggle = () =>{

    const [celsius, changeCelsius] = useState(true);

    const searchHandler = () => {

        if(celsius == false){
            changeCelsius(true);
            console.log('c')
        }else{
            changeCelsius(false);
            console.log('f');
            
        }       

    }

    return(<>       
        <div className="form-control">
            <label className="label cursor-pointer">
            <span className="label-text text-lg font-bold px-1">°C</span>
            <input type="checkbox" className="toggle toggle-secondary" onChange={searchHandler}/>
            <span className="label-text text-lg font-bold px-1">°F</span>
            </label>
        </div>
  </>);


}

export default UnitToggle;