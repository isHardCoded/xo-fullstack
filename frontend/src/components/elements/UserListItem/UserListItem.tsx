import type { User } from '../../../shared/types/User'
import styles from './UserListItem.module.scss'

interface UserListItemProps {
	user: User
}

export default function UserListItem({ user }: UserListItemProps) {
	return (
		<li className={styles.item}>
			<div className={styles.itemBlock}>
				<p>{user.full_name}</p>
				<p>{user.birth_date ? user.birth_date : 10}</p>
				<p>{user.gender ? user.gender : 'Мужской'}</p>
				<p>{user.account_status}</p>
				<p>{user.created_at}</p>
				<p>{user.updated_at}</p>
				<button>Разблокировать</button>
			</div>
		</li>
	)
}
