import { useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useUser } from '../../../hooks/useUser'
import { useInvitations } from '../../../hooks/useInvitations'

import styles from './ActiveUserList.module.scss'
import { StatusBadge } from '../../ui/StatusBadge'

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
							<StatusBadge status={user.status} styles={styles} />
							<button
								onClick={() => sendInvitation(currentUser?.id, user?.id, token)}
								className={`${
									user.status === 'in_game' ? styles.disabled : styles.active
								}`}
								disabled={user.status === 'in_game' ? true : false}
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
