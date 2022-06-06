import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Navbar = () => {
	const { user, logOut } = UserAuth()
	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			await logOut()
			navigate('/')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className='flex justify-between items-center p-4 z-[100] w-full absolute'>
			<Link to='/'>
				<h1 className='text-orange-500 text-4xl font-bold cursor-pointer'>
					FilmPro
				</h1>
			</Link>
			{user?.email ? (
				<div className='flex gap-5'>
					<Link to='/login'>
						<button>Account</button>
					</Link>
					<button
						onClick={handleLogout}
						className='bg-orange-500 py-2 px-6 cursor-pointer rounded'
					>
						Logout
					</button>
				</div>
			) : (
				<div className='flex gap-5'>
					<Link to='/login'>
						<button>Sign in</button>
					</Link>
					<Link to='/sign-up'>
						<button className='bg-orange-500 py-2 px-6 cursor-pointer rounded'>
							Login
						</button>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Navbar
