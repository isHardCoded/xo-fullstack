import { useCallback, useState } from 'react'
import { USER_SERVICE } from '../services/User.service'
import type { User, UserRating } from '../shared/types/User'

export function useUser() {
	const [users, setUsers] = useState<User[]>([])
	const [ratings, setRatings] = useState<UserRating[]>([])

	const getAllUsers = useCallback(async (token: string | null) => {
		setUsers(await USER_SERVICE.getAllUsers(token))
	}, [])

	const getUserRatings = useCallback(async (token: string | null) => {
		setRatings(await USER_SERVICE.getUserRating(token))
	}, [])

	return {
		users,
		ratings,
		getAllUsers,
		getUserRatings,
	}
}
