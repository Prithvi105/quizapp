import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'


export const Header1 = () => {
  return (
    <>
    <Wrapper>
    <header>
           <h1><li><Link to="/"><center>Quiz Application</center></Link></li></h1>
           {/* <li><Link to="/login">Login</Link></li>
           <li><Link to="/registration">Registration</Link></li> */}
    </header>
    </Wrapper>
   </> 
  )
}


