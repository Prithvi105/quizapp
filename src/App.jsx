import React, { useState } from 'react';
import { Login } from './components/loginForm';
import { Register } from './components/registrationForm';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Header } from './components/header';
import QuesForm from './components/faculty/quesForm';
import QuestionList from './components/faculty/quesList';
import PageNotFound from './components/pagenotFound';
import { Switch }
    from 'react-router-dom'




export const App = () => {

  const [questionList, setQuestionList] = useState([])
  const addQuestion = (quest) => {
    setQuestionList([...questionList, quest])
  }
  

  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/quesform" element={<QuesForm addQuestion={addQuestion}/>} />
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Register />} />
          <Route path = "/questionList" element = {<QuestionList questionList={questionList}/>} />
          <Route path='/*' element = {<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
