import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../store/api/apiSlice";
import { getAuth, setCredentials } from "../../../store/slices/authSlice";
import '../../../assets/css/auth/login.css'

function Login() {
  const navigate = useNavigate()
  // login info
  const [email, setEmail] = useState('')
  const [password, setPawssword] = useState('')
  // error mess and isSubmit
  const [errorMsg, setErrorMsg] = useState({name: '', message: ''})
  const [isSubmitted, setIsSubmitted] = useState(false)
  // valid email
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }
  // render error
  const renderErrorMsg = (name: string) => name === errorMsg.name && (
    <div className="error">{errorMsg.message}</div>
  )
  // handle change email
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmail(e.target.value)) {
      setErrorMsg({name: 'email', message: 'invalid email'})
    } else {
      setEmail(e.target.value)
      setErrorMsg({name: '', message: ''})
    }
  }
  // handle change password
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 6) {
      setErrorMsg({name: 'password', message: 'password must be more than 6 characters'})
    } else {
      setPawssword(e.target.value)
      setErrorMsg({name: '', message: ''})
    }
  }
  // handle login 
  const [login, {isLoading}] = useLoginMutation()
  const dispatch = useDispatch()
  const auth = useSelector(getAuth)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // call function login
    try {
      const userData = await login({identifier: email, password: password}).unwrap()
      console.log('user', setCredentials(userData))
      dispatch(setCredentials(userData))
      console.log(auth, 'auth')
      navigate('/foodtrucks')
    } catch (error: any) {
      if (error.data.statusCode === 400) {
        setErrorMsg({name: 'invalid', message: 'invalid credentials, please try again'})
      }
    }
  } 
  
  return(
    <>

        <div className="d-flex align-items-center justify-content-center my-5">
        <img className="logo" src={require('./logo-plumstreet.png')}/>
        </div>
        <div className="d-flex align-items-center justify-content-center">
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="input-container mb-4">
            <div className="input-email my-2">
            <input className="max-width" type="text" name="email" onChange={handleChangeEmail}   />
            {renderErrorMsg('email')}
            </div>
            <div className="input-password my-2">
            <input className="max-width" type="password" name="password" onChange={handleChangePassword}   />
            {renderErrorMsg('password')}
            </div>
          </div>
          <div className="button-container">
            {renderErrorMsg('invalid')}
            <button className="base-btn" type="submit">LOGIN</button>
          </div>
        </form>
        </div>
    </>
  ) 
}
export default Login