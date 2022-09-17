import React from 'react'

const AuthForm = ({handlesubmit, handleChange}) => {
  return (
    <>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="text" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <input type="submit" value="Submit"/>
        </form>
    </>
  )
}

export default AuthForm