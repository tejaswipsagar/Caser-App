import React from "react";
import logo_pic from "../picture/logo.png";
import {Link} from "react-router-dom";



function MainPage(){
  return (
<div>
        
<nav className="navbar navbar-expand-lg sticky-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="Link"><img className="logo-image" src={logo_pic} alt="" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Appointments
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="">Add Case <span className="dropdown-position">Ctrl+N</span></a></li>
                  <li><a className="dropdown-item" href="#">Open Case <span className="dropdown-position2">Ctrl+O</span></a></li>
                  <li><a className="dropdown-item" href="#">Read Cases</a></li>
                  <li><a className="dropdown-item" href="#">Import Cases</a></li>
                  <li><a className="dropdown-item" href="#">Print Case Card</a></li>
                  <li><a className="dropdown-item" href="#">Print Preview</a></li>
                </ul>
              </li>
             <li className="nav-item">
             <Link className="nav-link" aria-current="page" to="/cases">Cases</Link>
             </li>
            <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/counter">Counter</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reports">Reports</Link>
          </li>
        </ul>
        <ul className="navbar-nav font-awe ms-auto">
            <a href=""><i style={{position: "relative", bottom: "11px", color: "black"}} className="fa-solid fa-window-minimize fa-2x nav-icons"></i></a>
            <a href=""><i style={{color: "black"}} className="fa-solid fa-xmark fa-2x nav-icons"></i></a>
        </ul>
      </div>
    </div>
  </nav>

{/* First Section Starts Here */}
         
<section id="first-section">
    <div className="container-fluid first-container">
        <table className="ms-auto">
            <tr>
                <td>
                    <form action="">
                        <input className="search-btn" type="text" name="search" id="" />
                    </form>
                </td>
                <td>
                    <a href=""> <i style={{color: "black"}} className="fa-solid fa-bell"></i></a>
                </td>
                <td>
                    <a href=""><i style={{color: "black"}} className="fa-solid fa-gear"></i></a>
                </td>
                <td>
                    <a href=""><i style={{color: "black"}} className="fa-solid fa-user"></i></a>
                </td>
            </tr>
        </table>
    </div>
</section>

{/* // <!-- Second Section Going To Start Here --> */}
<section id="second-section">
    <div className="container-fluid">
        <div className="row row-1">

            <div className="col-lg-6 col-md-6 col-sm-12 first-col">
 
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 second-col">
 
            </div>


        </div>
    </div>



</section>





</div>

    )
};

export default MainPage;