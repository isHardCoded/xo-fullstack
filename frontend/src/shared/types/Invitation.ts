export interface Invitation {
	id: number
	from_user: string
	to_user: string
	status: 'pending' | 'accepted' | 'declined'
}
