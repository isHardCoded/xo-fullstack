import { PAGES } from '../../../shared/constants'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className={styles.header}>
			<img src='./Logo.svg' alt='' />
			<nav>
				<Link to={{ pathname: PAGES.DASHBOARD }}>Игровое поле</Link>
				<Link to={{ pathname: PAGES.RATING }}>Рейтинг</Link>
				<Link to={{ pathname: PAGES.ACTIVE }}>Активные игроки</Link>
				<Link to={{ pathname: PAGES.HISTORY }}>История игр</Link>
				<Link to={{ pathname: PAGES.USERS }}>Список игроков</Link>
			</nav>
			<button>
				<img src='./Logout.svg' alt='' />
			</button>
		</header>
	)
}
