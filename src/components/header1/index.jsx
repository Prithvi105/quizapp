import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export const Header1 = () => {
  return (
    <>
    <header1>
           <h1><center>Quiz Application</center></h1>
           <li><Link to="/loginForm"></Link></li>
           <li><Link to="/registrationForm"></Link></li>
           <li><Link to="/student"></Link></li>
           
        
    
    </header1>
   </> 
  )
}


