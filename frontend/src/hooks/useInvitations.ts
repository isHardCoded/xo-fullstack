import { useState } from 'react'
import { INVITATION_SERVICE } from '../services/Invitation.service'

export function useInvitations() {
	const [invitations, setInvitations] = useState([])

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
		await INVITATION_SERVICE.sendInvitation(fromUserId, toUserId, token)
	}

	return {
		invitations,
		getInvitations,
		sendInvitation,
	}
}
