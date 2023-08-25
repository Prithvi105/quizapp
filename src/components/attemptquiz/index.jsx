import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AttemptQuiz = () => {
    const [ques, setQues] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    useEffect(() => {
        axios.get('https://quizattendace.onrender.com/api/ques/read')
            .then((res) => {
                setQues(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < ques.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const currentQuestion = ques[currentQuestionIndex];

    return (
        <div>
            {currentQuestion && (
                <div key={currentQuestion.id}>
                    <h3>Question {currentQuestion.id + 1}</h3>
                    <p>{currentQuestion.ques}</p>
                    <form>
                        {currentQuestion.ans.map((ans, index) => (
                            <input
                                type="button"
                                key={index}
                                value={ans}
                            />
                        ))}
                        <input type="button" value="next" onClick={handleNextQuestion} />
                    </form>
                </div>
            )}
        </div>
    )
}

export default AttemptQuiz;

