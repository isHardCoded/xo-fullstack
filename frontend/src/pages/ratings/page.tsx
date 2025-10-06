import RatingsList from '../../components/containers/RatingsList/RatingsList'
import Layout from '../../layouts/Layout'
import styles from './index.module.scss'

export default function RatingsPage() {
	return (
		<Layout>
			<div className={styles.listWrapper}>
				<div className={styles.listHeader}>
					<h2>Список игроков</h2>
				</div>
				<RatingsList />
			</div>
		</Layout>
	)
}
