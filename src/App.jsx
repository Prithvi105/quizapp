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
          <Route path="/quesForm" element={<><Header/><QuesForm /></>} />
          <Route path="/" element={<><Header1 /><Login /></>} />
          <Route path="/registration" element={<><Header1/><Register /></>} />
          <Route path = "/questionList" element = {<><Header/><QuestionList /></>} />
          <Route path = '/forgotpass' element={ <ForgotPass />} />
          <Route path = '/instruct' element={ <Ins /> } />
          <Route path ='/quiz' element ={ <Quiz />} />
          <Route path = '/selectquiz' element = {<QuizSelection />} />
          <Route path = '/score' element = { <Score />} />
          <Route path='/*' element = {<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
