import React from 'react'

const LoginForm = ({handlesubmit, handleChange}) => {
  return (
    <>
        <form className='form-group' onSubmit={handlesubmit}>
            <input type="text" className="form-control" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" className="form-control" placeholder="Password" name="password" onChange={handleChange} />
            <input className='btn btn-primary' type="submit" value="Login"/>
        </form>
    </>
  )
}

export default LoginForm