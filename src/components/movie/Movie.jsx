import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

import { UserAuth } from '../../context/AuthContext'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from './../../firebase'

const Movie = ({ movie }) => {
	const [like, setLike] = React.useState(false)
	const [saved, setSaved] = React.useState(false)
	const { user } = UserAuth()

	const movieID = doc(db, 'users', `${user?.email}`)

	const savedShow = async () => {
		if (user?.email) {
			setLike(!like)
			setSaved(true)
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: movie.id,
					title: movie.title,
					img: movie.backdrop_path,
				}),
			})
		} else {
			alert('Please login to save movie')
		}
	}

	return (
		<>
			<div
				key={movie.title}
				className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
			>
				<img
					className='w-full h-auto block rounded'
					src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className='absolute top-0 left-0 text-xl w-full h-full hover:opacity-90 text-white hover:bg-orange-400 opacity-0 rounded'>
					<p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center '>
						{movie?.title}
					</p>
					<p onClick={savedShow}>
						{like ? (
							<FaHeart className='absolute top-4 left-4' />
						) : (
							<FaRegHeart className='absolute top-4 left-4' />
						)}
					</p>
				</div>
			</div>
		</>
	)
}

export default Movie
