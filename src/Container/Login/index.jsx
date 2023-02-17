import React from 'react'
import'./index.css'
function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
    console.log('hello')
}
const Login = () => {
    return (
        <div className='wrapper'>
            <div className='wrapper-login'>
                login
                <form onSubmit={handleSubmit}>
                    <div className='wrapper-login-inputs'>
                        <input placeholder='Email' type='email' />
                        <input placeholder='Password' type='password' />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
