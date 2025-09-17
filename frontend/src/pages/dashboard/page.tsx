import { useAuth } from '../../context/AuthContext'
import Layout from '../../layouts/Layout'

export default function DashboardPage() {
	const { user } = useAuth()

	return (
		<>
			<Layout>
				<h2>Привет, {user?.username}</h2>
			</Layout>
		</>
	)
}
