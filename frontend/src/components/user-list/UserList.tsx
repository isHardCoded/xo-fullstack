import { useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import { useAuth } from '../../context/AuthContext'
import UserListItem from '../user-list-item/UserListItem'

export default function UserList() {
	const { token } = useAuth()
	const { users, getAllUsers } = useUser()

	useEffect(() => {
		getAllUsers(token)
	}, [])

	return (
		<ul>
			{users.map(user => (
				<UserListItem user={user} />
			))}
		</ul>
	)
}
