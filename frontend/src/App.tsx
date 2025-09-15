import { Routes, Route } from 'react-router-dom'

import RegisterPage from './pages/register/page'
import LoginPage from './pages/login/page'

export default function App() {
	return (
		<Routes>
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	)
}
