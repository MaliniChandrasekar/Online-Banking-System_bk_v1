import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/login" element = {<Login />}></Route>
      <Route path="/signup" element = {<SignUp />}></Route>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
