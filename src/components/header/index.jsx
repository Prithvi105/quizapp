import { Link } from 'react-router-dom'
import React from 'react'
import './style.css'

export const Header = () => {
  return (
    <>
    <header>
           <h1><center>Quiz Application</center></h1>
           <li><Link to= "/quesform">Quiz Form</Link></li>
    </header>
    
    </>
  )
}
