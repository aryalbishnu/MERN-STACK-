import React, { useState } from 'react'
import { Link, useNavigate  } from "react-router-dom";
import axios from "axios";

function SignUp() {

  const navigate  = useNavigate ();
  const [user, setUser] = useState({
    name: "", email: "", work: "", phone: "", password: "", cpassword: ""
  });

  const handleChage = (e)=>{
    const { name, value } = e.target;  
    setUser({...user, [name]:value});
  }
  const numberOnly = (e) => {
    const { name, value } = e.target;
    // Ensure that the entered value is a valid number
    const isNumericInput = /^[0-9]+$/.test(value);
    if (isNumericInput || value === '') {
      setUser({ ...user, [name]: value });
    }
  };

  const dataSubmit = async(e)=>{
    e.preventDefault();
    const {name, email, work, phone, password, cpassword}= user;

    // fetch api use backend call
    /*
    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, work, phone, password, cpassword
      })
    });
    */
   // axios library use backend call
   const res = await axios.post('/register', {
    headers: {
      "Content-Type": "application/json"
    },
    name, email, work, phone, password, cpassword
    });
    //const data = await res.json();
    if (res.status === 422 || ! res.data) {
      window.alert("Invalid Register");
      console.log("Invalid Register");
      
    } else {
      window.alert("register succesfull");
      console.log("register succesfull");
      console.log(res.data);
      navigate('/login');
    }
  }
  return (
    <>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div>
          <div id="signUp-box">
         <div className="left">
    <form method='POST'>
    <h1 className='singnUp-h1'>Sign up</h1>
    <div>
      <label><i className="bi bi-people-fill"></i></label>
      <input type="text" className="username" id="name" name='name' placeholder="Username" autoComplete='off' value = {user.name} onChange={handleChage} />
    </div>

    <div>
      <label className='email'><i className="bi bi-telephone-forward-fill"></i></label>
      <input type="email" className="email" id='email' name='email' placeholder="E-mail" autoComplete='off' value = {user.email} onChange={handleChage} />
    </div>

    <div>
      <label className='work'><i className="bi bi-person-lines-fill"></i></label>
      <input type="text" className="work" id='work' name='work' placeholder="User Job" autoComplete='off' value = {user.work} onChange={handleChage} />
    </div>

    <div>
      <label className='phone'><i className="bi bi-telephone-forward-fill"></i></label>
      <input type="text" inputmode="numeric" className="phone" id='phone' name='phone' placeholder="Phone Number" autoComplete='off' value = {user.phone} onChange={numberOnly} />
    </div>

    <div>
      <label className='password'><i className="bi bi-shield-fill-exclamation"></i></label>
      <input type="password" className="password" id='password' name='password' placeholder="Password" autoComplete='off' value = {user.password} onChange={handleChage} />
    </div>

    <div>
      <label className='cpassword'><i className="bi bi-shield-fill-exclamation"></i></label>
      <input type="password" className="cpassword" id='cpassword' name='cpassword' placeholder="Re-Password" autoComplete='off' value = {user.cpassword} onChange={handleChage} />
    </div>
    
    <input type="submit" className="signup_submit" value="Sign me up" onClick={dataSubmit} />
    </form>
  </div>
  
  <div className="right">
    <button className="social-signin facebook">Log in with facebook</button>
    <button className="social-signin twitter">Log in with Twitter</button>
    <button className="social-signin google">Log in with Google+</button>
  </div>
  <div className="or">OR</div>
  <div className='register-login mt-4'>
    <Link className="nav-link" to="/login" >I have already account</Link>
  </div>
</div>

          
        </div>
      </div>
    </div>

    </>
  )
}

export default SignUp