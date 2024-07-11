import React from "react";
import './Register.css';
// import './Asset/js/Register.js';

const Registration = () => {
    return(
       <div>
        
<div class="registration-form">
  <h2>Registration Form</h2>
  <form id="registrationForm">
    <input type="text" name="name" placeholder="Name" required/>
    <input type="email" name="email" placeholder="Email ID" required/>
    <input type="tel" name="mobile" placeholder="Mobile No" required/>
    <div>
      <label>
        Male
        <input type="radio" name="gender" value="male" checked/>
      </label>
      <label>
        Female
        <input type="radio" name="gender" value="female"/>
      </label>
    </div>
    <textarea name="address" placeholder="Address" required></textarea>
    <input type="password" name="password" placeholder="Password" required/>
    <input type="text" name="captcha" placeholder="Captcha Code" required/>
    <button type="submit">Submit</button>
  </form>
</div>
       </div>
    );
}
export default Registration;