import { Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/register/page'

export default function App() {
	return (
		<Routes>
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	)
}
