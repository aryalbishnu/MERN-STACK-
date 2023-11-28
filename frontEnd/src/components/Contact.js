import React, { useEffect, useState } from 'react'

function Contact() {
  const [user, setUser] = useState({name: "", email: "", phone: "", message:""});

  // get data from jwttoken
  const contactDetail = async () => {
    try {
      const res = await fetch('/contact', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      if (!res.status === 201) {
        throw new Error(res.error);
      }
      setUser({...user, name: data.name, email: data.email, phone: data.phone});
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    contactDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // send to message 
  const messageSend = async (e) =>{
    e.preventDefault();
    const {name, email, phone, message} = user;
    const res = await fetch('/contact', {
      method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, message
        })
    })
    //const data = await res.json();
    if (res.status === 201) {
      alert("message send");
      setUser({ ...user, message: "" });
      console.log("message not send");
    } else if (res.status === 401) {
      alert("user is not exits");
      console.log("user is not exits");
    } else {
      alert('message not send');
      console.log('message not send');
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
            <div className='contac_head d-flex justify-content-between'>
              {/* phone */}
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAB4CAMAAADrCMHJAAAAY1BMVEX////4+Pji4uKxsbHS0tLs7OyLi4ucnJz8/PxZWVm8vLw1NTUxMTFEREQjIyPm5uaAgICnp6djY2MYGBg7OztSUlJNTU2VlZUAAAAiHh9ycnIoKCgcFRfy8vLCwsIcHBwODA1HORrqAAACj0lEQVRoge3bC2+qMBQHcKC1hUKhrZQyuDy+/6dc63TqfWyDHW6a5fxjjDzUH6dtotGTJBgMQPI89ck/ysGC00xu0SHcxz3muoNrkR1lyGcya2UKH1uYv6awl5iBcT4dg9CCjZaLkJn15/OyLC+1z/k9vZovR4kqrWNNcsDYaGLle51FvyweMI5VVdUvt/Tkdjx1qxoa+CkyE2vuW7RfQzFegqM+/7qmpw/nL4Oa/DSGVTDWpg+bPEyP6+wo3mIsv79nnjhpSDOlf77SN0L5KJ523Nakv7st0OfrnqQxtJlAi6Fdu3XSs64j9AQ6JtoMW59CK8tEdgKcormWbutzstIO2hcDDOEVLd+hME5kgDMj57sUhSN+SOAU+2pRMAI5JPsURReDwpY/UsFLVKACSNFZaEW1pxZxKMBHZI+iA1eMESjEEEMtNCq+qwBeqTsVwJ9y9LBrjaDipqhQEZtCAit4FAqqYlAkvI5AkTtUoAIVqEAFKlDxgxRq3a6oq5+piGNEUIEKVKACFdsVDBWoQAUqDlWYKBRx1AIVcSlKVKACFahARQQKtUcB/asuKlCBigMUbRwK6H9iJ2rZowD+VpSwenufQNsZJ0AVejSfn/ScuZTGzZB9Akk21lubt4xtBw2rSMyysRiktJ0itAFtY6HtqjadvxbScOBS+GurVkk/P+0tJ9ZbaZigE2yXVZ7ydjxLpr8Qbsaxk0ZBtxUFxYl0ZbWEHrvQW3Ztt1svm2+Pl9CCFlryllLKbnDwCK9oqFCFbP8VKcOtDTfZFQPTAh6RJOnkGZo7xpj6OIw5TgTNDkBcGBmd50vD48eZZxoMsH1374x0OjVPyZrfkl33TBPw4rgntPmlX8p/6Ng9IK9QsFHdk0jargAAAABJRU5ErkJggg==' alt='phone' />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    phone
                  </div>
                  <div className='contact_info_text'>
                    984374848
                  </div>
                </div>
              </div>

              {/* email */}
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <img src='data:image/jpeg;base64,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' alt='email' />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    email
                  </div>
                  <div className='contact_info_text'>
                    aryal@gmail.com
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className='contact_info_item d-flex justify-content-start align-items-center'>
                <img src='data:image/jpeg;base64,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' alt='address' />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Address
                  </div>
                  <div className='contact_info_text'>
                    Japan chiba
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* contact form */ }
          <div className='contact_form_container'>
            <div className='container'>
              <div className='row'>
                <div className='contact_form_main_title'>
                  <div className='contact_form_title'>
                    <h1>Form Title</h1>
                  </div>
                  <form method='POST'>
                  <div className='contact_form'>
                    <div className='contact_form_name d-flex justify-content-between align-items-center'>
                      <input type='text' id='contact_form_name' className='contact_form_name' name='name' placeholder='Enter your name' required='true' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    
                      <input type='email' id='contact_form_email' className='contact_form_email' name='email' placeholder='Enter your email' required='true' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

                      <input type='text' id='contact_form_phone' className='contact_form_phone' name='phone' placeholder='Enter your phone' required='true' value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                    </div>

                    <div className='contact_form_text'>
                      <textarea className='contact_form_message' id='contact_form_message' name='message' placeholder='Message' rows={"10"} required='true' value={user.message} onChange={(e) => setUser({ ...user, message: e.target.value })} />
                    </div>

                    <input type="submit" className="signup_submit" value="Send" onClick={messageSend} />
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Contact