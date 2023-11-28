import React , { useEffect, useState } from 'react'

function Main() {
  const [user, setUser] = useState('');
  const [valid, setValid] = useState(false);

  // get data from jwttoken
  const userDetail = async () => {
    try {
      const res = await fetch('/main', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(res.error);
      }
      setUser(data.name);
      setValid(true);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    userDetail();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row  ">
            <div className='text-center'>
              <div className='main-Page'>
                <h1>Welcome !!</h1>
                <h5>{user}</h5>
                <p>{valid ? 'your home page' : 'please login'}</p>
                
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Main