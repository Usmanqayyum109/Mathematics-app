import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    
        <>
      <nav >
        {/* <ul> */}
          {/* <li>
            <Link to="/">Test</Link>
        //   </li> */}
          {/* <li> */}
           <div ><Link to="/Detail"><span className="name">Detail</span></Link></div> 
          {/* </li> */}
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        {/* </ul> */}
      </nav>
      </>
  )
}

export default Layout;
