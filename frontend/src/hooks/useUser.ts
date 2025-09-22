import { useState } from 'react'
import { USER_SERVICE } from '../services/User.service'
import type { User } from '../shared/types/User'

export function useUser() {
	const [users, setUsers] = useState<User[]>([])

	async function getAllUsers(token: string | null) {
		setUsers(await USER_SERVICE.getAllUsers(token))
	}

	return {
		users,
		getAllUsers,
	}
}
