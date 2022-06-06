import axios from 'axios'
import React from 'react'
import { requests } from '../../utils'

const Main = () => {
	const [movies, setMovies] = React.useState([])

	const movie = movies[Math.floor(Math.random() * movies.length)]

	React.useEffect(() => {
		axios.get(requests.requestPopular).then(response => {
			setMovies(response.data.results)
		})
	}, [])

	return (
		<div className='w-full h-[550px]'>
			<div className='w-full h-full'>
				<div className='w-full absolute h-[550px] bg-gradient-to-r from-black'></div>
				<img
					className='w-full h-full object-cover'
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className='absolute w-full top-[20%] p-4 md:p-8'>
					<h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
					<div className='my-4'>
						<button className='border bg-orange-500 border-orange-500 py-2 px-5 rounded'>
							Play
						</button>
						<button className='border bg-orange-500 border-orange-500 py-2 px-5 rounded ml-4'>
							Watch Later
						</button>
					</div>
					<p className='text-sm'>Released: {movie?.release_date}</p>
					<p className='w-full my-4 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>
						{movie?.overview}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Main
