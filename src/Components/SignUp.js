import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='sign'>
        <img className='position-relative' src='https://bl-i.thgim.com/public/incoming/tlu8mc/article66049006.ece/alternates/LANDSCAPE_1200/IMG_PO02_Online_banking._2_1_VAABIESV.jpg' height="700px" width="100%" />
        <div className='position-absolute top-50 start-0 translate-middle-y bg-white p-2 m-2 m1 text-center'>
        <form className='p-2 m-2'>
            <p className='m1'>Firstname : <input type='text' placeholder='enter your firstname' /></p>
            <p>Lastname : <input type='text' placeholder='enter your lastname' /></p>
            <p>Email : <input type='text' placeholder='enter your mail-id' required/></p>
            <p>Re-enter Email : <input type='text' placeholder='re-enter your mail-id' required/></p>
          <p>City : <input type='text' placeholder='enter your city' /></p> 
          <p>Password : <input type='password' placeholder='enter your password' required/></p>
            <p>Re-enter Password : <input type='password' placeholder='re-enter your password' required/></p>
            <p>Already have an account? : <Link to="/login">Login</Link></p>
            <button>SignUp</button>
        </form>
        </div>

        </div>
  )
}

export default SignUp
