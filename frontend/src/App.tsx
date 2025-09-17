import { Routes, Route } from 'react-router-dom'

import RegisterPage from './pages/register/page'
import LoginPage from './pages/login/page'
import DashboardPage from './pages/dashboard/page'
import { AuthProvider } from './providers/AuthProvider'

export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
			</Routes>
		</AuthProvider>
	)
}
