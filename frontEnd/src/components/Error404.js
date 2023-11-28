import React from 'react'
import Error from "../images/404.png"
function Error404() {
  return (
    <>
      <div className="container">
        <div className="row  ">
            <div className='text-center'>
              <div className='main-Page'>
                <div className='errorImg'>
                  <img src = {Error}  alt='logo'/>
                </div>
              
                <h1>Page Not Found !!</h1>
                <p>Go Back </p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Error404