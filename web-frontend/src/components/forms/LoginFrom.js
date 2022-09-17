import React from 'react'

const LoginForm = ({handlesubmit, handleChange}) => {
  return (
    <>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <input type="submit" value="Login"/>
        </form>
    </>
  )
}

export default LoginForm