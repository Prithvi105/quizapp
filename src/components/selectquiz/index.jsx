import React from 'react';
import { Link } from 'react-router-dom';

const QuizSelection = ({ quizzes }) => {
    return (
        <div>
            <h1>Choose a Quiz to Attempt</h1>
            <ul>
                {quizzes.map(quiz => (
                    <li key={quiz.id}>
                        <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizSelection;
