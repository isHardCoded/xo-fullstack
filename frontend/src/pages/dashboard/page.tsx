import { useAuth } from '../../context/AuthContext'

export default function DashboardPage() {
	const { user } = useAuth()

	return (
		<>
			<h2>Привет, {user?.username}</h2>
		</>
	)
}
