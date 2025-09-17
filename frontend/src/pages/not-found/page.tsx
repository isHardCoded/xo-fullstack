import { Link } from 'react-router-dom'
import styles from './page.module.scss'
import Layout from '../../layouts/Layout'

export default function NotFoundPage() {
	return (
		<Layout>
			<div className={styles.page}>
				<h1>404</h1>
				<p>Страница не найдена</p>
				<Link to={{ pathname: '/dashboard' }}>Вернуться на главную</Link>
			</div>
		</Layout>
	)
}
