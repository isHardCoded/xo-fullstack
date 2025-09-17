export interface RegisterData {
	username: string
	email: string
	full_name: string
	password: string
}

export interface LoginData {
	username: string
	password: string
}

export interface User {
	id: number
	username: string
	email: string
	full_name: string
	birth_date: string
	gender: string
	status: string
	account_status: string
	created_at: string
	updated_at: string
}
