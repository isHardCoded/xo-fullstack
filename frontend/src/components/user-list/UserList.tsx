import { useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import { useAuth } from '../../context/AuthContext'
import UserListItem from '../user-list-item/UserListItem'
import styles from './UserList.module.scss'

export default function UserList() {
	const { token } = useAuth()
	const { users, getAllUsers } = useUser()

	useEffect(() => {
		getAllUsers(token)
	}, [])

	return (
		<ul className={styles.list}>
			{users.map(user => (
				<UserListItem user={user} />
			))}
		</ul>
	)
}
