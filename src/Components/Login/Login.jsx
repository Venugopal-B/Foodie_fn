import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
const Login = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
              <h2>{currState}</h2>
              <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" name="" id="" placeholder='Your Name' required />}
                
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Your Password' required/> 
            </div>
            <button>
                {currState==="Sign Up"?"Create Account":"Login"}
            </button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>By continuing , I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}> Click here</span></p>:
            <p>Already Have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>}
        </form>

    </div>
  )
}

export default Login