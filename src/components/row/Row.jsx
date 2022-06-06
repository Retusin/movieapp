import axios from 'axios'
import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import Movie from '../movie/Movie'

const Row = ({ title, fetchUrl, rowID }) => {
	const [movies, setMovies] = React.useState([])

	React.useEffect(() => {
		axios.get(fetchUrl).then(res => {
			setMovies(res.data.results)
		})
	})

	const slideLeft = () => {
		const slider = document.getElementById('slider' + rowID)
		slider.scrollLeft = slider.scrollLeft - 500
	}
	const slideRight = () => {
		const slider = document.getElementById('slider' + rowID)
		slider.scrollLeft = slider.scrollLeft + 500
	}

	return (
		<>
			<h2 className='font-bold md:text-xl p-4'>{title}</h2>
			<div className='relative flex items-center group'>
				<MdChevronLeft
					onClick={slideLeft}
					className='bg-orange-400 rounded-full left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 absolute'
					size={25}
				/>
				<div
					id={'slider' + rowID}
					className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
				>
					{movies.map(movie => (
						<Movie key={movie?.title} movie={movie} />
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className='bg-orange-400 rounded-full right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 absolute'
					size={25}
				/>
			</div>
		</>
	)
}

export default Row
