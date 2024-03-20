import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import loginbg from '../loginbg.jpg'

const SignUp = () => {
  const {price} = useParams()
  const [FormData, setData] = useState({
    firstname: "",
   lastname: "",
    email : "",
    city : "",
    password : ""
  })


  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...FormData, [name]: value })
    console.log(name, value);
  }
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(FormData);
    if(FormData.firstname && FormData.lastname && FormData.city == ''){
      console.log("Noooo")
    }else{
      const SignUp = {
        firstname: FormData.firstname,
        lastname: FormData.lastname,
       email : FormData.email,
       city : FormData.city,
        password : FormData.password
      }

    fetch("http://localhost:8080/shop/add", {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'post',
      body: JSON.stringify(SignUp)
    })
      .then((response) => {
        console.log("Data received " + response);
        alert("Register successfully")
      })

    }
  }
  const bg = {
    backgroundImage:`linear-gradient(rgba(248, 247, 247, 0.3),rgba(248, 247, 247, 0.7)), url(${loginbg})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

    const content = {

    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '10px 10px 10px black',
    width: '400px',
    height : '450px'
};
  const m1 = {
    fontWeight : 'bold',
    // fontStyle : 'italic',
    color : '#1F456E',
    fontFamily: 'Montserrat, sans-serif',
    // fontSize : '18px',
  }
  return (
    <div style={bg}>
        {/* <img className='position-relative' src='./Images/signup3.jpg' height="700vh" width="100%" /> */}
        <div className='p-2 m-2 d-flex align-items-center justify-content-center text-center' style={{height : '620px'}}>
        <div className='p-2 m-2' style={content}>
          <br></br>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" style={{color:'#0077B6'}} fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></div><br></br>
            <p style={m1}>Firstname : <input type='text' placeholder='enter your firstname' name='firstname' value={FormData.firstname} onChange={handleChange}/></p>
            <p style={m1}>Lastname : <input type='text' placeholder='enter your lastname' name='lastname' value={FormData.lastname} onChange={handleChange}/></p>
            <p style={m1}>Email : <input type='text' placeholder='enter your mail-id' name='email' value={FormData.email} onChange={handleChange} required/></p>
            {/* <p>Re-enter Email : <input type='text' placeholder='re-enter your mail-id' required/></p> */}
          <p style={m1}>City : <input type='text' placeholder='enter your city' name='city' value={FormData.city} onChange={handleChange}/></p> 
          <p style={m1}>Password : <input type='password' placeholder='enter your password' name='password' value={FormData.password} onChange={handleChange} required/></p>
            {/* <p>Re-enter Password : <input type='password' placeholder='re-enter your password' required/></p> */}
            <p  style={m1}>Already have an account? : <Link to={`/login/${price}`}>Login</Link></p>
            <button onClick={handleSubmit}>SignUp</button>
        </div>
        </div>

        </div>
  )
}

export default SignUp
