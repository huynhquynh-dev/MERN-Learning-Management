import React from 'react'
import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'

const Auth = ({authRouter}) => {
    return (
        <>
            <h1>MERN Learning Management</h1>
            { authRouter === 'login' && <LoginForm/> }
            { authRouter === 'register' && <RegisterForm/> }
        </>
    )
}

export default Auth
