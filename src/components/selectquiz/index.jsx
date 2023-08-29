import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { services } from '../../services';
import { Wrapper } from './style';

const QuizSelection = () => {

    const [subjects , setSubjects] = useState([])
    const navigate = useNavigate()
    useEffect( () => {
        services.getSubjects()
        .then( (res) => {
            console.log(res.data)
            setSubjects(res.data)
        })
    }, [])

    const goToQuiz = (subject) => {
        navigate(`/quiz?subjectId=${subject.id}`)
    }

    return (
        <Wrapper>
        <div className='outer'>
            <h1>Choose a Quiz to Attempt:</h1>
            <div className='inner'>
                {subjects.map(subject =>
                    <input type="button" key={subject.id} value={subject.name} onClick={ (e) => goToQuiz(subject)}/>
                )}
            </div>
        </div>
        </Wrapper>
        
    );
};

export default QuizSelection;
