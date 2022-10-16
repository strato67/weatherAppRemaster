import React from "react";

const SearchBar = () => {

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log('hi');
    }


    return(<>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <input type="text" placeholder="Search for location" className="input input-bordered  " />
        </div>
        </form>
    </>);
}

export default SearchBar;