import React from 'react'
import { Wrapper } from './style'
import photo from './photo.jpg'
import { useNavigate } from 'react-router'


export const Student = () => {
  const navigate = useNavigate()
  const goToInstructions = () => {
    navigate('/instruct')
  }

  console.log(photo);
  return (
    <Wrapper>

      <h1><center>Welcome john to the Quiz App!</center></h1>
      <div class="1">
        <div class="inner">

          <center><img src={photo} alt="source img" /></center>;

        </div>
        <input type="button" value="Next" onClick={goToInstructions} />
      </div>

    </Wrapper>
  )
}




