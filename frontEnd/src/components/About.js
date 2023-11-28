import React, { useEffect, useState } from 'react'
import profileImg from "../images/profile.png"
import { Link, useNavigate } from "react-router-dom";
function About() {
  const navigate  = useNavigate ();
  const [isHomeVisible, setIsHomeVisible] = useState(true); 
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [user, setUser] = useState({});

  const homeActive = () => {
    setIsHomeVisible(true);
    setIsProfileVisible(false);
  };

  const profileActive = () => {
    setIsHomeVisible(false);
    setIsProfileVisible(true);
  };

  const userAbout = async()=>{
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json();
      if (!res.status === 200) {
        throw new Error(res.error);
      }
      setUser(data);
    } catch (error) {
      console.log(error);
      navigate('/login');
      
    }
  }

  useEffect(() => {
    userAbout();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
            <div className='col-md-4 profileImg'>
              <div className='profile-img'>
                <img src={profileImg} alt='profile_Img' />
              </div>
            </div>

            <div className='col-md-6 profileHead'>
              <div className='profile_head'>
                <h5>{user.name}</h5>
                <h6>{user.work}</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS: <span>1/10</span></p>
                
              </div>
            </div>

            <div className='col-md-2 profileEdit'>
              <input type='submit' className='profile-edit' value='Edit profile' />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4 profileWork'>
              <div className='profile-work'>
                <p>Work Link</p>
                <div className='mt-3'>
                  <a href='https://www.facebook.com/' target='_blank' rel="noreferrer" >Facebook</a><br />
                </div>

                <div className='mt-3'>
                  <a href='https://github.com/aryalbishnu/' target='_blank' rel="noreferrer" >GitHub</a><br />
                </div>

                <div className='mt-3'>
                  <a href='https://www.youtube.com/' target='_blank' rel="noreferrer" >Youtoube</a><br />
                </div>
              </div>
            </div>

            <div className='col-md-8 aboutInfo' >
            <ul className="nav nav-tabs" role='tablist'>
                  <li className="nav-item" >
                    <Link className="nav-link" id='home-tab' onClick={homeActive} data-toggle="tab" to="#home" role='tab' aria-controls='home'>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id='profile-tab' onClick={profileActive} data-toggle="tab" to="#profile" role='tab' aria-controls='profile'>TimeLine</Link>
                  </li>
                </ul>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className={`tab-pane fade ${isHomeVisible ? 'show active' : ''}`} id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row'>
                    <div className='col-md-6 profileHead'>
                      <label>User Id</label>
                    </div>
                    <div className='col-md-6 profileHead'>
                      <p>{user._id}</p>
                    </div>
                  </div>

                  <div className='row mt-1'>
                    <div className='col-md-6 profileHead'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6 profileHead'>
                      <p>{user.email}</p>
                    </div>
                  </div>

                  <div className='row mt-1'>
                    <div className='col-md-6 profileHead'>
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6 profileHead'>
                      <p>{user.phone}</p>
                    </div>
                  </div>

                </div>

                <div className={`tab-pane fade ${isProfileVisible ? 'show active' : ''}`} id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                  <div className='row'>
                    <div className='col-md-6 profileHead'>
                      <label>Experince</label>
                    </div>
                    <div className='col-md-6 profileHead'>
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className='row mt-1'>
                    <div className='col-md-6 profileHead'>
                      <label>Java</label>
                    </div>
                    <div className='col-md-6 profileHead'>
                      <p>30000</p>
                    </div>
                  </div>

                  <div className='row mt-1'>
                    <div className='col-md-6 profileHead'>
                      <label>Node Js</label>
                    </div>
                    <div className='col-md-6 profileHead'>
                      <p>40000</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About