import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { useNavigate } from 'react-router';

const Quiz = () => {
  const [ques, setQues] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);
  const [chosenOption, setChosenOption] = useState(-1); // -1 represents no option chosen
  const [answers, setAnswers] = useState([]);

  let subjectId = new URLSearchParams(window.location.search).get('subjectId');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://quizattendace.onrender.com/api/ques/read')
      .then((res) => {
        setQues(res.data.filter((ques) => ques.title === subjectId));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [subjectId]);

  useEffect(() => {
    if (currentQuestionIndex === ques.length - 1) {
      setShowSubmit(true);
    } else {
      setShowSubmit(false);
    }
  }, [currentQuestionIndex, ques]);

  const handleOptionClick = (optionIndex) => {
    setChosenOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (chosenOption !== -1) {
      setAnswers([...answers, { questionId: ques[currentQuestionIndex].id, answerIndex: chosenOption }]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setChosenOption(-1); // Reset chosen option
    }
    else 
        alert("Please select an option")
  };

  const goToScore = (e) => {
    e.preventDefault();
    if (chosenOption === -1) {
      alert('Please select an option');
    } else {
      const answerPayload = {};
      answers.forEach((answer) => {
        answerPayload[`${answer.questionId}`] = answer.answerIndex;
      });
  
      axios.post('https://quizattendace.onrender.com/api/quiz/evaluate', {
          title: subjectId,
          answers: answerPayload,
        })
        .then((res) => {
          console.log(res.data);
          navigate('/score');
        })
        .catch((error) => {
            console.log(answers)
            console.log(answerPayload)
          console.log(error);
        });
    }
  };
  

  const currentQuestion = ques[currentQuestionIndex];

  return (
    <Wrapper>
    <div>
      {currentQuestion && (
        <div key={currentQuestion.id}>
          <h3>Question {currentQuestion.id + 1}</h3>
          <p>{currentQuestion.ques}</p>
          <form>
            {currentQuestion.ans.map((ans, index) => (
                
              <input
                key={index}
                type="button"
                value={ans}
                onClick={() => handleOptionClick(index)}
                style={{ backgroundColor: chosenOption === index ? 'lightblue' : 'black' }}
              />
            ))}
            {showSubmit ? (
              <input type="submit" value="Submit" onClick={(e) => goToScore(e)} />
            ) : (
              <input type="btn" value="Next" onClick={handleNextQuestion} />
            )}
          </form>
        </div>
      )}
    </div>
    </Wrapper>
  );
};

export default Quiz;
