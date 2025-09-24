import { Routes, Route } from 'react-router-dom'

import RegisterPage from './pages/register/page'
import LoginPage from './pages/login/page'
import DashboardPage from './pages/dashboard/page'
import { AuthProvider } from './providers/AuthProvider'
import UsersPage from './pages/users/page'
import NotFoundPage from './pages/not-found/page'
import { AUTH_PAGES, PAGES } from './shared/constants'
import ActiveUsersPage from './pages/active-users/page'

export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path={AUTH_PAGES.REGISTER} element={<RegisterPage />} />
				<Route path={AUTH_PAGES.LOGIN} element={<LoginPage />} />
				<Route path={PAGES.DASHBOARD} element={<DashboardPage />} />
				<Route path={PAGES.USERS} element={<UsersPage />} />
				<Route path={PAGES.ACTIVE} element={<ActiveUsersPage />} />

				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</AuthProvider>
	)
}
