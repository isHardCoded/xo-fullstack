import type { User } from '../../shared/types/User'

interface UserListItemProps {
	user: User
}

export default function UserListItem({ user }: UserListItemProps) {
	return (
		<li>
			<div>
				<p>
					{user.full_name} - {user.email}
				</p>
			</div>
		</li>
	)
}
