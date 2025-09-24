import { API_URL } from '../shared/constants'

export const INVITATION_SERVICE = {
	sendInvitation: async (
		fromUserId: number | undefined,
		toUserId: number | undefined,
		token: string | null
	) => {
		const response = await fetch(`${API_URL}/games/invitations/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ from_user: fromUserId, to_user: toUserId }),
		})

		if (!response.ok) throw new Error('Ошибка при отправке приглашения')

		return await response.json()
	},

	getInvitations: async (
		toUserId: number | undefined,
		token: string | null
	) => {
		const response = await fetch(
			`${API_URL}/games/invitations/?to_user=${toUserId}&status=pending`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		)

		if (!response.ok) throw new Error('Ошибка при получении приглашений')

		return await response.json()
	},

	respondInvitation: async (
		invitationId: number,
		status: 'accepted' | 'declined',
		token: string
	) => {
		const response = await fetch(
			`${API_URL}/games/invitations/${invitationId}/`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ status }),
			}
		)

		if (!response.ok) throw new Error('Ошибка при ответе на приглашение')
		return await response.json()
	},
}
