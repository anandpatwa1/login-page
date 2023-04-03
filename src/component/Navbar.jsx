import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css/navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/auth/authSlice'

function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user} = useSelector(state => state.auth)

  const handleLogout = ()=>{
    navigate('/register')
    dispatch(logoutUser())
  }
  
  return (
    <header className='navbar '>
        <div className="left">
            Welcome
        </div>
        <div className="right">
           {
            user ? (
              <Link to='/' className='btn-border btn' onClick={handleLogout}>Log out</Link>
            ) : (
              <>
              <Link to='/login' className='btn-border btn'>Log In</Link>
              <Link to='/register' className='btn-border btn'>Register</Link>
              </>
            )
           }
        </div>
    </header>
  )
}

export default Navbar