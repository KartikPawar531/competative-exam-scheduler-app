import React from "react";
import './App.css';
// import { Link } from "react-router-dom";


const Navb = () =>{
    return(
        <>
            <nav className="navbar">
   <div className="navdiv">
       <div className="logo"><a href="#">Successors</a></div>
       <ul>
           <li>
           < a href="#">Home</a>
            </li>
           <li><a href="#">About</a></li>
           <li> <a href="#">Services</a></li>
           <li> <a href="#">Books</a></li>
           <li> <a href="#">Practise Test</a></li> 
         <button><li> <a href="#">SignIn</a></li></button>
          <button> <li> <a href="#">Register</a></li></button>
       </ul>
   </div>
  </nav>
        </>
    );
}
export default Navb;