import React from "react";
import './App.css';
import Logo1 from './Image/ssclogo.jpg';
import logo2 from  './Image/UPSC.jpg';
import logo3 from  './Image/Defence.jpg';
import logo4 from  './Image/Bank.jpg';
import logo5 from  './Image/DRDO.jpg';
import logo6 from  './Image/CSIR-Logo.jpg';
import logo7 from  './Image/GATE.jpg';
import  logo8 from './Image/PSC.jpg';
import logo9 from  './Image/IB.jpg';
import  logo10 from './Image/JEE.jpg';
import { Route } from "react-router-dom";

const Content = () =>{
    return(
        <>
        <div className="container">
   <h1 className="heading">Achieve Your Goal Through This Exams </h1>
   <div className="box-container">
       <div className="box">
           <img src={Logo1} alt='ssclogo.jpg'/>
           <h3>SSC</h3>
           <p>Staff Selection Commission</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo2} alt='UPSC.jpg'/>
           <h3>UPSC</h3>
           <p>Union Public Service Commission</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo3} alt='Defence.jpg'/>
           <h3>Defence</h3>
           <p>“We live by chance, we love by choice,
                we kill by profession.”</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo4} alt="Bank.jpg"/>
           <h3>Banking</h3>
           <p>"Adventure is the life of commerce, 
               but caution is the life of banking".</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo5} alt="DRDO"/>
           <h3>DRDO</h3>
           <p>Defence Research & Development Organisation</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo6} alt="CSIR.jpg"/>
           <h3>CSIR</h3>
           <p>Council of Scientific & Industrial Research</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo7} alt="GATE.jpg"/>
           <h3>GATE</h3>
           <p>Graduate Aptitude Test in Engineering</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo8} alt="PSC.jpg"/>
           <h3>State PCS</h3>
           <p>State Public Service Commission</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo9} alt="IB.jpg"/>
           <h3>IB ACIO</h3>
           <p>Intelligence Bureau-Asistant central intelligence officer</p>
           <a href="#" className="btn">Explore More</a>
       </div>
       <div className="box">
           <img src={logo10} alt="JEE.jpg"/>
           <h3>JEE</h3>
           <p>Joint Entrance Examination.</p>
           <a href="#" className="btn">Explore More</a>
       </div>
   </div>
 </div>
        
        </>
    );
}
export default Content;