import { useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useUser } from '../../../hooks/useUser'
import { useInvitations } from '../../../hooks/useInvitations'

import styles from './ActiveUserList.module.scss'

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
		<div className={styles.list}>
			<header>
				<h3>Активные игроки</h3>
			</header>
			<ul className={styles.activeUserList}>
				{users.map(user => (
					<li>
						<div>
							<p>{user.username}</p>
							<p>{user.status}</p>
							<button
								onClick={() => sendInvitation(currentUser?.id, user?.id, token)}
							>
								Позвать играть
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
