import React from "react";
import './App.css';

const Footer = () =>{
    return(
        <>
        <footer>
   <div className="footer-container">
       <div className="Social">
           <a href=""><i className="fa-brands fa-instagram"></i></a>
           <a href=""><i className="fa-brands fa-whatsapp"></i></a>
           <a href=""><i className="fa-brands fa-x-twitter"></i></a>
           <a href=""><i className="fa-brands fa-google-plus"></i></a>
           <a href=""><i className="fa-brands fa-youtube"></i></a>
       </div>
       <div className="footernav">
           <ul>
               <li><a href="#">Home</a> </li>
               <li><a href="#">News</a> </li>
               <li><a href="#">Contact Us</a> </li>
               <li><a href="#">Our team</a> </li>
          </ul>
       </div>
       <div className="footerbottom">
           <p>Copyright &copy;2024</p><span>Designed By Ganesh</span>
       </div>
    </div>
   
</footer>
        </>
    );
}
export default Footer;
