import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
 return <div>
  <nav className="nav">
    <ul>
      <li><Link to="/Member">Members</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Event">Events</Link></li>
    </ul>
  </nav>
 </div>
}

export default Navbar;