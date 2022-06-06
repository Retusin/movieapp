import React from 'react'

import Row from '../components/row/Row'
import { requests } from '../utils'
import Main from './../components/main/Main'

const Home = () => {
	return (
		<>
			<Main />
			<Row rowID='1' title='Up Coming' fetchUrl={requests.requestUpcoming} />
			<Row rowID='2' title='Popular' fetchUrl={requests.requestPopular} />
			<Row rowID='3' title='Trending' fetchUrl={requests.requestTrending} />
			<Row rowID='4' title='Top Rated' fetchUrl={requests.requestTopRated} />
			<Row rowID='5' title='Horror' fetchUrl={requests.requestHorror} />
		</>
	)
}

export default Home
