import React from 'react'
import { Outlet, Link } from "react-router-dom";
const html = () => {
  return (
    <>

    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li> <Link to="/contact">contact</Link></li>
<br />
<div className="out">
<Outlet />
</div>
    
    </>

  )
}

export default html