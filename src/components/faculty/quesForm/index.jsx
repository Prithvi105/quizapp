import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Wrapper from './style'

const QuesForm = ({addQuestion}) => {

    const [question, setQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")

    const navigate = useNavigate()
    const questionList = () => {
        navigate("/questionList")
    }
    const add = () => {
        addQuestion({
            question : question,
            optionA : optionA,
            optionB : optionB,
            optionC : optionC,
            optionD : optionD,
            correctAnswer : correctAnswer
        })
        setQuestion('')
        setOptionA('')
        setOptionB('')
        setOptionC('')
        setOptionD('')
       // navigate("/questionForm")
    }

  return (
    <Wrapper>
            <form action = "">
              <h1>Add Questions</h1>
                <input
                    type='text'
                    placeholder = "Enter Question"
                    value = {question}
                    onChange = {(e) => setQuestion(e.target.value)} 
                    required={true}
                />
                <input
                    type = "text"
                    placeholder = "option A"
                    value = {optionA}
                    onChange = {(e) => setOptionA(e.target.value)} 
                    required={true}
                />
                <input
                    type = "text"
                    placeholder = "option B"
                    value = {optionB}
                    onChange = {(e) => setOptionB(e.target.value)} 
                    required={true}
                />
                <input
                    type = "text"
                    placeholder = "option C"
                    value = {optionC}
                    onChange = {(e) => setOptionC(e.target.value)} 
                    required={true}
                />
                <input
                    type = "text"
                    placeholder = "option D"
                    value = {optionD}
                    onChange = {(e) => setOptionD(e.target.value)}
                    required={true} 
                />
                <select name="type"
                    onChange={(e) => {setCorrectAnswer(e.target.value)}}
                required>
			        <option value selected disabled >--Select correct option--</option>
			        <option value="optionA">{optionA}</option>
			        <option value="optionB">{optionB}</option>
			        <option value="optionC">{optionC}</option>
                    <option value="optionD">{optionD}</option>
		        </select>
                <input
                    type = "button"
                    value = "Add Question"
                    onClick = {add} 
                    
                />
            </form>
            <input
                    type = "button"
                    value = "View Questions"
                    onClick = {questionList}        
            />

    </Wrapper>
  )
}

export default QuesForm