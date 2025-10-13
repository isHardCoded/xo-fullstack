import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AUTH_PAGES } from '../shared/constants'
import type { ReactNode } from 'react'

interface ProtectedRouteProps {
	element: ReactNode
}

export default function ProtectedRoute({ element }: ProtectedRouteProps) {
	const { user } = useAuth()

	if (user) {
		return <Navigate to={AUTH_PAGES.LOGIN} />
	}

	return element
}
