import React from "react";

const UnitToggle = ({unitSelect}) =>{

    return(<>       
        <div className="form-control">
            <label className="label cursor-pointer">
            <span className="label-text text-lg font-bold px-1">°C</span>
            <input type="checkbox" className="toggle toggle-secondary" onChange={unitSelect}/>
            <span className="label-text text-lg font-bold px-1">°F</span>
            </label>
        </div>
  </>);


}

export default UnitToggle;