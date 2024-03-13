import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AddProduct} from './Components/AddProduct'
import Home from './Components/Home';
import AddCategory from './Components/AddCategory';
import User from './Components/User';
import Admin1 from './Components/Admin1';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/login" element = {<Login />}></Route>
      <Route path="/signup" element = {<SignUp />}></Route>
      <Route path="/addproduct" element={<AddProduct />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/addcategory" element={<AddCategory />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path ="/admin" element= {<Admin1 />}></Route>
      <Route path ="/update" element= {<UpdateProduct />}></Route>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
