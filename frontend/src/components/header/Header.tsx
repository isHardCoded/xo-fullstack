import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header className={styles.header}>
			<img src='./Logo.svg' alt='' />
			<nav>
				<Link to={{ pathname: '/dashboard' }}>Игровое поле</Link>
				<Link to={{ pathname: '/rating' }}>Рейтинг</Link>
				<Link to={{ pathname: '/history' }}>История игр</Link>
				<Link to={{ pathname: '/users' }}>Список игроков</Link>
			</nav>
			<button>
				<img src='./Logout.svg' alt='' />
			</button>
		</header>
	)
}
