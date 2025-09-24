import { useEffect, useState, type ReactNode } from 'react'
import type { LoginData, User } from '../shared/types/User'
import { USER_SERVICE } from '../services/User.service'
import { AuthContext } from '../context/AuthContext'

interface AuthProviderProps {
	children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User | null>(null)
	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		const savedUser = localStorage.getItem('user')
		const savedToken = localStorage.getItem('token')

		if (savedUser && savedToken) {
			setUser(JSON.parse(savedUser))
			setToken(savedToken)
		}
	}, [])

	async function login(data: LoginData) {
		try {
			const responseData = await USER_SERVICE.login(data)
			setUser(responseData.user)
			setToken(responseData.access)

			localStorage.setItem('user', JSON.stringify(responseData.user))
			localStorage.setItem('token', responseData.access)
		} catch (err) {
			console.log(`Error: ${err}`)
		}
	}

	function logout() {
		setUser(null)
		setToken(null)
		localStorage.removeItem('user')
		localStorage.removeItem('token')
	}

	return (
		<AuthContext.Provider value={{ user, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
