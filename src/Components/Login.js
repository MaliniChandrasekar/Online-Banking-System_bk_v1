import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <img className='position-relative' src='https://bl-i.thgim.com/public/incoming/tlu8mc/article66049006.ece/alternates/LANDSCAPE_1200/IMG_PO02_Online_banking._2_1_VAABIESV.jpg' height="700px" width="100%" />
        <div className='position-absolute top-50 start-0 translate-middle-y bg-white p-2 m-2 m1 text-center'>
        <form className='p-2 m-2'>
            <p>Email : <input type='text' placeholder='enter your email-id' /></p>
            <p>Password: <input type='password' placeholder='enter your password' /></p>
            <p>Do you have an account? : <Link to="/signup">SignUp</Link></p>
             <button>Login</button>
        </form>
        </div>

        </div>
  )
}

export default Login
