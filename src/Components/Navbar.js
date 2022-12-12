import React from "react";
import SearchBar from "./SearchBar";
import UnitToggle from "./unitToggle";

const Navbar = ({setResult, unitSelect}) => {

    return(<>
      <div className="navbar bg-primary flex items-center justify-center">

        <div className="flex gap-2 ">
        <SearchBar setResult={setResult}/>
        <UnitToggle unitSelect={unitSelect}/>
        </div>
      </div>
      
    
    </>);
}

export default Navbar;