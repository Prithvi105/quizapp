import React from 'react'
import { Wrapper } from './style'


const Ins = () => {
    return (
        // <input id="head">
       <Wrapper>
            <div class="insform">
                <div class="inner">
                    <h1>Instructions:</h1>
                    <p>Following are the instructions to attempt the quiz-</p>
                </div>
                <div class="list">
                    <ul>
                        <li>Total Questions=5</li>
                        <li>Each question contain 1 mark</li>
                        <li>There is no negative marking</li>
                        <li>Each question contain 4 options</li>

                    </ul>
                </div>
            </div>
           
            <input type="button" value="Attempt quiz" />
         </Wrapper>
    )
}

export default Ins