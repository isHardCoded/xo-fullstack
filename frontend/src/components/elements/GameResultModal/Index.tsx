import { Link } from 'react-router-dom'
import styles from './Index.module.scss'
import { PAGES } from '../../../shared/constants'
import { useAuth } from '../../../context/AuthContext'

interface GameResultModalProps {
	winner: string | null
	opponent: { id: number; username: string }
}

export default function GameResultModal({
	winner,
	opponent,
}: GameResultModalProps) {
	const { user } = useAuth()

	function defineWinnerName() {
		if (winner === 'X') return user?.username + ' победил!'
		if (winner === '0') return opponent.username + ' победил!'
		else return 'Ничья'
	}

	return (
		<div className={styles.modal}>
			<img width={130} src='./trophy.svg' alt='' />
			<p>
				<span>{defineWinnerName()}</span>
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
