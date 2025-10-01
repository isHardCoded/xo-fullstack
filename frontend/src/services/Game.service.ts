import { API_URL } from '../shared/constants'

export const GAME_SERVICE = {
	postGameResult: async (payload: any, token: string) => {
		const response = await fetch(`${API_URL}/games/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},

			body: JSON.stringify(payload),
		})

		if (!response.ok) throw new Error('Ошибка при сохранении результата')

		return await response.json()
	},
}
