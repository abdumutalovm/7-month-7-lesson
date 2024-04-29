import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { Link } from 'react-router-dom';

function Register() {
    const theme = useContext(ThemeContext);

    function handleRegister() {

    }
    return (
        <div className='w-96 mx-auto mt-28 rounded-xl shadow-xl p-8'>
            <h1 className={`${theme.theme == 'light' ? 'text-text1' : 'text-white'} text-3xl text-center font-bold mb-5`}>Register</h1>
            <label htmlFor="username" className='text-[14px]'>Username</label>
            <input type="text" id='username' className="input mt-2 mb-6 w-full  border-zinc-300" />

            <label htmlFor="email" className='text-[14px]'>Email</label>
            <input type="email" id='email' className="input mt-2 mb-6 w-full  border-zinc-300" />

            <label htmlFor="password" className='text-[14px]'>Password</label>
            <input type="password" id='password' className="input mt-2 mb-6 w-full  border-zinc-300" />

            <button className={`btn w-full ${theme.theme == 'light' ? 'bg-headerLogo text-white' : 'bg-hdLogo text-blue-950 hover:bg-pink-500'}`} onClick={handleRegister}>REGISTER</button>

            <h1 className='text-center mt-4'>Not a member yet?  <Link className={` hover:underline ${theme.theme == 'light' ? 'text-headerLogo' : 'text-hdLogo hover:text-pink-600'}`} to='/login'>Login</Link></h1>
        </div>
    )
}

export default Register