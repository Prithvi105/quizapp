import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Quiz = () => {
  const [ques, setQues] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

  let subjectId = new URLSearchParams(window.location.search).get('subjectId');
   const navigate = useNavigate()
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

  const handleNextQuestion = () => {
    if (currentQuestionIndex < ques.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToScore = () => {
    axios.post('')
    navigate('/score')
  }
  const currentQuestion = ques[currentQuestionIndex];

  return (
    <div>
      {currentQuestion && (
        <div key={currentQuestion.id}>
          <h3>Question {currentQuestion.id + 1}</h3>
          <p>{currentQuestion.ques}</p>
          <form>
            {currentQuestion.ans.map((ans, index) => (
              <input type="button" key={index} value={ans} />
            ))}
            {showSubmit ? (
              <input type="submit" value="Submit" onClick={goToScore}/>
            ) : (
              <input type="button" value="Next" onClick={handleNextQuestion} />
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Quiz;
