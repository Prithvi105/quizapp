import { Link } from 'react-router-dom'
import React from 'react'
import { Wrapper } from './style.js'

export const Header = () => {
  return (
    <>
    <Wrapper>
    <header>
           <h1><li><Link to= "/"><center>Quiz Application</center></Link></li></h1>
           <li><Link to= "/quesform">Quiz Form</Link></li>
    </header>
    </Wrapper>
    </>
  )
}
