import React from "react";
import '../Asserts/login.css';
import {Link} from "react-router-dom";

const Login=()=>{
    return(

        <div className="main">
<div class="container">
      <div class="center">
          <h1>Login</h1>
          <form action="" method="POST">
              <div class="txt_field">
                  <input type="text" name="text" required/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt_field">
                  <input type="password" name="password" required/>
                  <span></span>
                  <label>Password</label>
              </div>
              <div class="pass">Forget Password?</div>
              <input name="submit" type="Submit" value="Login"/>
              <div class="signup_link">
                <Link to={'/Signin'}>
                   <a href="signup.php">Signup</a>
                </Link>
                   
              </div>
          </form>
      </div>
    </div>


        </div>
    );
}
export default Login;
