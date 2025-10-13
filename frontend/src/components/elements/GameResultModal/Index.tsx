import { Link } from 'react-router-dom'
import styles from './Index.module.scss'
import { PAGES } from '../../../shared/constants'

export default function GameResultModal() {
	return (
		<div className={styles.modal}>
			<img width={130} src='./trophy.svg' alt='' />
			<p>
				<span>Владлен Пупкин </span>
				победил!
			</p>
			<div>
				<Link to={PAGES.ACTIVE}>
					<button>Новая игра</button>
				</Link>
				{/* <Link to={PAGES.DASHBOARD}>
					<button>Выйти в меню</button>
				</Link> */}
			</div>
		</div>
	)
}
