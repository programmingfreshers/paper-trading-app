import React from "react";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{height:'80px',fontSize:'large',backgroundColor:'#659DBD'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Paper Trader
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item "  style={{paddingLeft:'50px'}}>
                <Link className="nav-link " aria-current="page" to="/">
                  Paper Trading
                </Link>
              </li>
              <li className="nav-item "  style={{paddingLeft:'50px'}}>
                <Link className="nav-link " to="/recommendations">
                  Recommendations
                </Link>
              </li>
              <li className="nav-item "  style={{paddingLeft:'50px'}}>
                <Link className="nav-link " to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item "  style={{paddingLeft:'50px'}}  >
                <Link className="nav-link" to="/education">
                  Education                       
                </Link>
              </li>
              <li className="nav-item "  style={{marginLeft:'50px'}}>
                <Link className="nav-link " to="/pricing">
                  Pricing
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
