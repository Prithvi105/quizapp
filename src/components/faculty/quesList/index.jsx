import React from 'react'
import { Wrapper } from './style'

const QuestionList = ({questionList}) => {
  return (
    <Wrapper>
      <div id='outer'>
      {
        questionList.map((quest) => <div>
            <div id='que'>
               Question = {quest.question}
            </div>
            <div>
               Option A = {quest.optionA}
            </div>
            <div>
               Option B = {quest.optionB}
            </div>
            <div>
               Option C = {quest.optionC}
            </div>
            <div>
               Option D = {quest.optionD}
            </div>
            <div>
               Correct Option = {quest.correctAnswer}
            </div>
        </div>)
        }
        </div>
    </Wrapper>
  )
}

export default QuestionList