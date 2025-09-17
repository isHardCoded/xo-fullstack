import { API_URL } from '../shared/constants'
import type { RegisterData } from '../shared/types/User'
import type { LoginData } from '../shared/types/User'

export const USER_SERVICE = {
	register: async (data: RegisterData) => {
		const response = await fetch(`${API_URL}/users/register/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error('Ошибка при регистрации')
		}

		return response
	},

	login: async (data: LoginData) => {
		const response = await fetch(`${API_URL}/users/login/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error('Ошибка при авторизации')
		}

		return await response.json()
	},

	getAllUsers: async (token: string | null) => {
		const response = await fetch(`${API_URL}/users/all/`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})

		if (!response.ok) {
			throw new Error('Ошибка при получении всех пользователей')
		}

		return await response.json()
	},
}
