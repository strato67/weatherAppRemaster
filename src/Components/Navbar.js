import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {

    return(<>
      <div className="navbar bg-primary">
        <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Weather App</a>
        </div>
        <div className="flex-none gap-2">
        <SearchBar/>
        
        <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text text-lg font-bold px-1">°C</span>
    <input type="checkbox" className="toggle toggle-secondary"  />
    <span className="label-text text-lg font-bold px-1">°F</span>
  </label>
</div>



        </div>
      </div>
    
    
    </>);
}

export default Navbar;