import React from 'react';
import { Login } from './components/loginForm';
import { Register } from './components/registrationForm';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Header } from './components/header';
import QuesForm from './components/faculty/quesForm';
import QuestionList from './components/faculty/quesList';
import PageNotFound from './components/pagenotFound';
import './app.css'
import ForgotPass from './components/forgotpass';
import Ins from './components/instruct';
import QuizSelection from './components/selectquiz';
import Quiz from './components/quiz';
import Score from './components/score';
import { Header1 } from './components/header1';
import Footer from './components/footer';

export const App = () => {
  return (
      <BrowserRouter>
      
        <Routes>
          <Route path="/quesform" element={<><Header/><QuesForm /><Footer /></>} />
          <Route path="/" element={<><Header1 /><Login /><Footer /></>} />
          <Route path="/registration" element={<><Header1/><Register /><Footer /></>} />
          <Route path = "/questionList" element = {<><Header/><QuestionList /><Footer /></>} />
          <Route path = '/forgotpass' element={ <><Header1/><ForgotPass /><Footer /></>} />
          <Route path = '/instruct' element={ <><Header/><Ins /><Footer /></> } />
          <Route path ='/quiz' element ={<><Header1 />  <Quiz />  <Footer /></>} />
          <Route path = '/selectquiz' element = { <><Header1 /> <QuizSelection /> <Footer /></>} />
          <Route path = '/score' element = { <Score />} />
          <Route path='/*' element = {<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
