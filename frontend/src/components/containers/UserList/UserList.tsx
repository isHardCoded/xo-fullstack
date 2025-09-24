import { useEffect } from 'react'
import { useUser } from '../../../hooks/useUser'
import { useAuth } from '../../../context/AuthContext'
import UserListItem from '../../elements/UserListItem/UserListItem'
import styles from './UserList.module.scss'

export default function UserList() {
	const { token } = useAuth()
	const { users, getAllUsers } = useUser()

	useEffect(() => {
		if (token) {
			getAllUsers(token).catch(console.error)
		}
	}, [token, getAllUsers])

	return (
		<table className={styles.table}>
			<thead className={styles.columns}>
				<tr>
					<th>ФИО</th>
					<th>Возраст</th>
					<th>Пол</th>
					<th>Статус</th>
					<th>Создан</th>
					<th>Изменен</th>
					<th></th>
				</tr>
			</thead>
			<tbody className={styles.body}>
				{users.map(user => (
					<UserListItem key={user.id} user={user} />
				))}
			</tbody>
		</table>
	)
}
