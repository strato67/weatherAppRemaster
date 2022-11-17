import React from "react";
import SearchBar from "./SearchBar";
import UnitToggle from "./unitToggle";

const Navbar = ({setResult}) => {

    return(<>
      <div className="navbar bg-primary">
        <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Weather App</a>
        </div>
        <div className="flex-none gap-2">
        <SearchBar setResult={setResult}/>
        
        <UnitToggle/>



        </div>
      </div>
    
    
    </>);
}

export default Navbar;