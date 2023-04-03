import { Link, useNavigate } from 'react-router-dom'
import './css/register.css'
import { useEffect, useState } from 'react'
import { registerUser } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'


function Register() {

	const dispatch = useDispatch('')
	const navigate = useNavigate()
	const {isSuccess , isLoading , isError , message , user} = useSelector(state =>state.auth)

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	})
	const { name, email, password, password2 } = formData

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(password !== password2){
			alert('password are not same')
		}else{
			dispatch(registerUser(formData))
		}
	}

useEffect(()=>{
	if(isError){
		alert(message)
		toast.error(message) 
	}
	if(isSuccess || user){
		navigate("/")
	}
	

},[isSuccess , isLoading , isError , message , user])

if(isLoading){
	return(
		<h2>Loading...</h2>
	)
}
	return (
		<div className="container">
			<div className="box box-register">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<h2>Register</h2>
					<div className="inputBox inputBox-register">
						<input name='name' value={name} onChange={handleChange} type="text" required="required" />
						<span>name</span>
						<i></i>
					</div>
					<div className="inputBox inputBox-register">
						<input name='email' value={email} onChange={handleChange} type="text" required="required" />
						<span>Email</span>
						<i></i>
					</div>
					<div className="inputBox inputBox-register">
						<input name='password' value={password} onChange={handleChange} type="password" required="required" />
						<span>Password</span>
						<i></i>
					</div>
					<div className="inputBox inputBox-register">
						<input name='password2' value={password2} onChange={handleChange} type="password" required="required" />
						<span>Confirm Password</span>
						<i></i>
					</div>
					<div className="links">
						<a href="#">Forgot Password ?</a>
						<Link to='/login'>Login</Link>
					</div>
					<button type="submit" className="btn btn-new">Register</button>
				</form>
			</div>
		</div>
	)
}

export default Register