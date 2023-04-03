import React, { useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
	const {isSuccess , isLoading , isError , message , user} = useSelector(state =>state.auth)
	const navigate = useNavigate()

	useEffect(()=>{
		if (user === null) {
			navigate('/login')
		}

	},[isSuccess , isLoading , isError , message , user])
  return (
    <div className="container">
		<div className="box">
			<form autoComplete="off">
				<h2>HOME PAGE</h2>
				
				<div className="links">
					{/* <Link  to="/login">login</Link>
					<Link  to="/register">Register</Link> */}
				</div>
			</form>
		</div>
	</div>
  )
}

export default Home