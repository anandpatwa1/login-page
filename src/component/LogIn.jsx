import { Link, useNavigate } from 'react-router-dom'
import './css/login.css'
import { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { loginUser } from '../features/auth/authSlice'

function LogIn() {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {isSuccess , isLoading , isError , message , user} = useSelector(state =>state.auth)

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})

	const { email, password } = formData

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(loginUser(formData))
	}

	useEffect(()=>{
		if(isError){
			alert(message) 
		}
		if(isSuccess || user){
			navigate('/')
		}

	},[isSuccess , isLoading , isError , message , user])

	if(isLoading){
		return(
			<h2>Loading...</h2>
		)
	}
	return (
		<div className="container">
			<div className="box">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<h2>Log in</h2>
					<div className="inputBox">
						<input name='email' value={email} onChange={handleChange} type="text" required="required" />
						<span>Email</span>
						<i></i>
					</div>
					<div className="inputBox">
						<input name='password' value={password} onChange={handleChange} type="password" required="required" />
						<span>Password</span>
						<i></i>
					</div>
					<div className="links">
						<a href="#">Forgot Password ?</a>
						<Link to="/register">Register</Link>
					</div>
					<button type="submit" className="btn btn-new">Login</button>
				</form>
			</div>
		</div>
	)
}

export default LogIn
