import React, { useState, useEffect } from 'react'

function Footer() {
    const [date, setDate] = useState('');
    useEffect(() => {
      const currentYear = ()=>{
        setDate(new Date().getFullYear());
      }
    currentYear();
    }, []);
    const style = {
      marginTop: '100px'
    };
  return (
    <>
    <div style={style}>
    </div>
    <footer>
    <div className="footer-container">
      <p>&copy; {date} Aryal Website</p>
    </div>
    </footer>
    </>
  )
}

export default Footer