import React from "react";

const Navbar = () => {

    return(<>
      <div className="navbar bg-primary">
        <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Weather App</a>
        </div>
        <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
        </div>
          </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

          <li><a className="justify-between">Celsius
          <span className="badge">✓</span>
            </a></li>
          <li><a>Fahrenheit</a></li>
        </ul>
        </div>
        </div>
      </div>
    
    
    </>);
}

export default Navbar;