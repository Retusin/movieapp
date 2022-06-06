import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import AccountPage from './pages/AccountPage'
import ProtecteRoute from './components/protecte-route/ProtecteRoute'

function App() {
	return (
		<>
			<AuthContextProvider>
				<Navbar />
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/sign-up' element={<SignUpPage />} />
						<Route
							path='/account'
							element={
								<ProtecteRoute>
									<AccountPage />
								</ProtecteRoute>
							}
						/>
					</Routes>
				</Router>
			</AuthContextProvider>
		</>
	)
}

export default App
