import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUpPage = () => {
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const { user, signUp } = UserAuth()
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await signUp(email, password)
			navigate('/')
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<div className='w-full h-screen'>
				<div className='fixed w-full px-4 py-24 z-50'>
					<div className='max-w-[450px] h-[600px] mx-auto bg-orange/75 text-white'>
						<div className='max-w-[320px] mx-auto py-16'>
							<h1 className='text-3xl font-bold'>Sign Up</h1>
							<form
								onSubmit={handleSubmit}
								className='w-full flex flex-col py-4'
							>
								<input
									onChange={e => setEmail(e.target.value)}
									className='py-3 my-2 bg-grey-600 rounded '
									type='email'
									placeholder='Email...'
									autoComplete='email'
								/>
								<input
									onChange={e => setPassword(e.target.value)}
									className='py-3 my-2 bg-grey-600 rounded '
									type='password'
									placeholder='Password...'
									autoComplete='current-password'
								/>
								<button className='bg-blue-900 py-3 my-6 rounded font-bold'>
									Sign Up
								</button>
								<div className='flex justify-between items-center text-sm'>
									<p>
										<input className='mr-2' type='checkbox' />
										Remember me
									</p>
									<p>Need Help?</p>
								</div>
								<p className='py-4'>
									<span>Alredy subscribe to FilmPro? </span>
									<Link to='/login'> Sign In</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SignUpPage
