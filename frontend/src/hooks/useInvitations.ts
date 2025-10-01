import { useState } from 'react'
import { INVITATION_SERVICE } from '../services/Invitation.service'
import type { Invitation } from '../shared/types/Invitation'

export function useInvitations() {
	const [invitations, setInvitations] = useState<Invitation[]>([])
	const [message, setMessage] = useState({})

	const getInvitations = async (
		toUserId: number | undefined,
		token: string | null
	) => {
		setInvitations(await INVITATION_SERVICE.getInvitations(toUserId, token))
	}

	const sendInvitation = async (
		fromUserId: number | undefined,
		toUserId: number | undefined,
		token: string | null
	) => {
		setMessage(
			await INVITATION_SERVICE.sendInvitation(fromUserId, toUserId, token)
		)
		alert('Приглашение успешно отправлено')
	}

	return {
		invitations,
		getInvitations,
		setInvitations,
		sendInvitation,
		message,
	}
}
