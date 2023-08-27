import React, { useState } from "react";
import { useNavigate } from "react-router";
import Wrapper from "./style";
import axios from "axios";

const QuesForm = () => {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [quizId, setQuizId] = useState("");

  const navigate = useNavigate();

  const questionList = () => {
    navigate("/questionList");
  };

  const add = () => {
    if ( question &&  optionA && optionB && optionC && optionD && correctAnswer && quizId ) {
      const options = [optionA, optionB, optionC, optionD];
      const correctAnsIndex = options.indexOf(correctAnswer);
      
      axios.post("https://quizattendace.onrender.com/api/ques/add", {
          title: quizId,
          ques: question,
          ans: options,
          correctAnsIndex: correctAnsIndex,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Please fill all the fields.");
    }
  };

  return (
    <Wrapper>
      <form action="">
        <h1>Add Questions</h1>
        <input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="option A"
          value={optionA}
          onChange={(e) => setOptionA(e.target.value)}
        />
        <input
          type="text"
          placeholder="option B"
          value={optionB}
          onChange={(e) => setOptionB(e.target.value)}
        />
        <input
          type="text"
          placeholder="option C"
          value={optionC}
          onChange={(e) => setOptionC(e.target.value)}
        />
        <input
          type="text"
          placeholder="option D"
          value={optionD}
          onChange={(e) => setOptionD(e.target.value)}
        />
        <select
          name="type" onChange={(e) => {setCorrectAnswer(e.target.value)}}  >
        <option value selected disabled>
            --Select correct option--
          </option>
          <option value={optionA}>{optionA}</option>
          <option value={optionB}>{optionB}</option>
          <option value={optionC}>{optionC}</option>
          <option value={optionD}>{optionD}</option>
        </select>
        <select
          onChange={(e) => {setQuizId(e.target.value)}}
        >
          <option value selected disabled>
            --Select Subject--
          </option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
        </select>
        <input type="button" value="Add Question" onClick={add} />
      </form>
      <input type="button" value="View Questions" onClick={questionList} />
    </Wrapper>
  );
};

export default QuesForm;
