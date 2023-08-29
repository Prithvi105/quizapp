import React from 'react'
import { Wrapper } from './style'
import { useNavigate } from 'react-router'


const Ins = () => {
    const navigate = useNavigate()
    const goToQuizType = () => {
        navigate('/selectquiz')
    }
    return (
       <Wrapper>
            <div class="insform">
                <div class="inner">
                    <h1>Instructions:</h1>
                    <p>Following are the instructions to attempt the quiz-</p>
                </div>
                <div class="list">
                    <ul>
                        <li>Each question contain 1 mark</li>
                        <li>There is no negative marking</li>
                        <li>Each question contain 4 options</li>

                    </ul>
                </div>
                <div class ="btn" >
                <input type="button" value="Attempt quiz" onClick={goToQuizType}/>
                </div>
                
            </div>
           
            
         </Wrapper>
    )
}

export default Ins