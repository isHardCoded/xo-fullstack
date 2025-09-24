import { useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useUser } from '../../../hooks/useUser'
import { useInvitations } from '../../../hooks/useInvitations'

export default function ActiveUserList() {
	const { user: currentUser, token } = useAuth()
	const { users, getAllUsers } = useUser()
	const { sendInvitation } = useInvitations()

	useEffect(() => {
		if (token) {
			getAllUsers(token).catch(console.error)
		}
	}, [token, getAllUsers])

	return (
		<ul>
			{users.map(user => (
				<li>
					<div>
						<p>{user.full_name}</p>
						<button
							onClick={() => sendInvitation(currentUser?.id, user?.id, token)}
						>
							Позвать играть
						</button>
					</div>
				</li>
			))}
		</ul>
	)
}
