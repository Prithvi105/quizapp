import React from 'react';
import { Login } from './components/loginForm';
import { Register } from './components/registrationForm';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Header } from './components/header';


export const App = () => {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
