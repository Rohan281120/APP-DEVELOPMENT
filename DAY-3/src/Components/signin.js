import React from "react";
import '../Asserts/login.css';
import {Link} from "react-router-dom";



const Signin=()=>{
    return(

        <div className="main">
<div class="container">
      <div class="center">
          <h1>Create New Account</h1>
          <form action="" method="POST">
              <div class="txt_field">
                  <input type="text" name="text" required/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt_field">
                  <input type="text" name="text" required/>
                  <span></span>
                  <label>Email</label>
              </div>
              <div class="txt_field">
                  <input type="password" name="password" required/>
                  <span></span>
                  <label>Create Password</label>
              </div>
              <div class="txt_field">
                  <input type="password" name="password" required/>
                  <span></span>
                  <label>ReEnter Password</label>
              </div>
           
              <input name="submit" type="Submit" value="Create New Account"/>
              <div class="signup_link">
                <Link to={'/'}>

                  <a href="signup.php">Already Have Account</a>
                </Link>
              </div>
          </form>
      </div>
    </div>


        </div>
    );
}
export default Signin;
