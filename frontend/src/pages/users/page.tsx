import UserList from '../../components/containers/UserList/UserList'
import Layout from '../../layouts/Layout'
import styles from './index.module.scss'

export default function UsersPage() {
	return (
		<>
			<Layout>
				<div className={styles.listWrapper}>
					<div className={styles.listHeader}>
						<h2>Список игроков</h2>
						<button>Добавить игрока</button>
					</div>
					<UserList />
				</div>
			</Layout>
		</>
	)
}
