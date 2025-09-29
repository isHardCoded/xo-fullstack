import { useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useInvitations } from '../../../hooks/useInvitations'
import { INVITATION_SERVICE } from '../../../services/Invitation.service'

export default function InvitationList() {
	const { invitations, getInvitations } = useInvitations()
	const { user, token } = useAuth()

	async function handleRespond(
		id: number,
		status: 'accepted' | 'declined',
		token: string | null
	) {
		await INVITATION_SERVICE.respondInvitation(id, status, token)
	}

	useEffect(() => {
		getInvitations(user?.id, token)
	}, [])

	return (
		<ul>
			{invitations.map(invitation => (
				<li>
					<div>
						<span>id: {invitation.id} </span>
						<span>От кого: {invitation.from_user}</span>
						<span>Кому: {invitation.to_user}</span>
						<button
							onClick={() => handleRespond(invitation.id, 'accepted', token)}
						>
							Принять
						</button>
						<button
							onClick={() => handleRespond(invitation.id, 'declined', token)}
						>
							Отклонить
						</button>
					</div>
				</li>
			))}
		</ul>
	)
}
