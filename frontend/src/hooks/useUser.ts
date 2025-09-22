import { useState } from 'react'
import { USER_SERVICE } from '../services/User.service'
import type { User } from '../shared/types/User'

export function useUser() {
	const [users, setUsers] = useState<User[]>([])
	const [error, setError] = useState<unknown | null>(null)

	async function getAllUsers(token: string | null) {
		try {
			setUsers(await USER_SERVICE.getAllUsers(token))
		} catch (e) {
			setError(e)
		}
	}

	return {
		users,
		error,
		getAllUsers,
	}
}
