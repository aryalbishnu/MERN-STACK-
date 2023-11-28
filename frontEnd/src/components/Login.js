import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../App';
function Login() {
  const {state, dispatch} = useContext(UserContext);
  const navigate  = useNavigate ();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async(e) => {
    e.preventDefault();
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })
    const data = await res.json();
    if (res.status ===500 || res.status ===400 || res.status ===422 || !data) {
      window.alert('Login failed');
      console.log('Login failed');
    } else {
      dispatch({type: 'USER', payload:true});
      console.log(state)
      window.alert('Login success');
      console.log('Login success');
      navigate('/')
    }
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
            <div id="login-box">
              <form method='POST'>
              <h1>Login Here !!</h1>
              <div>
                <label className='email'><i className="bi bi-telephone-forward-fill"></i></label>
                <input type="email" className="email" id='email' name='email' placeholder="E-mail" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
    
              <div>
                <label className='password'><i className="bi bi-shield-fill-exclamation"></i></label>
                <input type="password" className="password" id='password' name='password' placeholder="Password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
        
              <input type="submit" className="signup_submit" value="Login" onClick={userLogin} />
              </form>

              <div className='login-register mt-4'>
              <Link className="nav-link" to="/signup" >Crate A New Account</Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login