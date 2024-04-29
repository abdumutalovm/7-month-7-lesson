import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../App'

function Login() {
    const theme = useContext(ThemeContext);

    function handleLogin() {

    }
    return (
        <div className='w-96 mx-auto mt-28 rounded-xl shadow-xl p-8'>
            <h1 className={`${theme.theme == 'light' ? 'text-text1' : 'text-white'} text-3xl text-center font-bold mb-5`}>Login</h1>

            <label htmlFor="email" className='text-[14px]'>Email</label>
            <input type="email" id='email' className="input mt-2 mb-6 w-full  border-zinc-300" />

            <label htmlFor="password" className='text-[14px]'>Password</label>
            <input type="password" id='password' className="input mt-2 mb-6 w-full  border-zinc-300" />

            <button className={`btn w-full mb-4 ${theme.theme == 'light' ? 'bg-headerLogo text-white' : 'bg-hdLogo text-blue-950 hover:bg-pink-500'}`} onClick={handleLogin}>Login</button>
            <button className={`btn w-full ${theme.theme == 'light' ? 'bg-headerLogo text-white' : 'bg-purple-300 text-blue-950 hover:bg-purple-400'}`} onClick={handleLogin}>GUEST USER</button>


            <h1 className='text-center mt-4'>Already a member?  <Link className={` hover:underline ${theme.theme == 'light' ? 'text-headerLogo' : 'text-hdLogo hover:text-pink-600'}`} to='/register'>Register</Link></h1>
        </div>
    )
}

export default Login