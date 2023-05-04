import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
import Nav from './components/Nav'

const App = () => {

	return (
		<ReactKeycloakProvider authClient={keycloak}>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
				</Routes>
			</BrowserRouter>
		</ReactKeycloakProvider>
	)
}

export default App
