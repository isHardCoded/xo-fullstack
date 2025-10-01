import { useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useInvitations } from '../../../hooks/useInvitations'
import { INVITATION_SERVICE } from '../../../services/Invitation.service'

import styles from './InvitationList.module.scss'

export default function InvitationList() {
	const { invitations, getInvitations, setInvitations } = useInvitations()
	const { user, token } = useAuth()

	async function handleRespond(
		id: number,
		status: 'accepted' | 'declined',
		token: string | null
	) {
		await INVITATION_SERVICE.respondInvitation(id, status, token)
		setInvitations(prev => prev.filter(invitation => invitation.id !== id))
	}

	useEffect(() => {
		if (user?.id && token) {
			getInvitations(user.id, token)
		}
	}, [user?.id, token])

	return (
		<ul className={styles.list}>
			{invitations.length > 0 ? (
				invitations.map(
					invitation =>
						invitation.status === 'pending' && (
							<li>
								<div>
									<span>Приглашение от: {invitation.from_user}</span>
									<div>
										<button
											onClick={() =>
												handleRespond(invitation.id, 'accepted', token)
											}
										>
											Принять
										</button>
										<button
											onClick={() =>
												handleRespond(invitation.id, 'declined', token)
											}
										>
											Отклонить
										</button>
									</div>
								</div>
							</li>
						)
				)
			) : (
				<p style={{ textAlign: 'center' }}>Вас еще никто не пригласил :(</p>
			)}
		</ul>
	)
}
