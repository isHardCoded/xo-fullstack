import GameBoard from '../../components/elements/GameBoard/GameBoard'
import GameResultModal from '../../components/elements/GameResultModal/Index'
import { useAuth } from '../../context/AuthContext'
import { useTicTacToe } from '../../hooks/useTicTacToe'
import { useUser } from '../../hooks/useUser'
import { useEffect } from 'react'
import Layout from '../../layouts/Layout'

import styles from './index.module.scss'

export default function DashboardPage() {
	const { user, token } = useAuth()
	const { ratings, getUserRatings } = useUser()

	useEffect(() => {
		getUserRatings(token)
	}, [token, getUserRatings])

	const opponent = { id: 5, username: 'Opponent' }
	const mySign = 'X'

	const { cells, handleClick, winner, turn } = useTicTacToe(
		user,
		opponent,
		mySign,
		token
	)

	return (
		<>
			<Layout>
				<div className={styles.page}>
					<GameBoard cells={cells} handleClick={handleClick} />
					<div className={styles.turnBlock}>
						<p>Ходит</p>
						<img
							width={24}
							src={turn === 'X' ? './cross.svg' : './zero.svg'}
							alt=''
						/>
						<p>{turn === 'X' ? user?.username : opponent.username}</p>
					</div>
				</div>

				{winner && (
					<div className={styles.modalWrapper}>
						<GameResultModal winner={winner} opponent={opponent} />
					</div>
				)}

				<div className={styles.usersInfo}>
					<h2>Игроки</h2>
					<div className={styles.infoWrapper}>
						<img width={24} src='./cross.svg' alt='Крестик' />
						<div>
							<p>{user?.username}</p>
							<p>28% побед</p>
						</div>
					</div>
					<div className={styles.infoWrapper}>
						<img width={24} src='./zero.svg' alt='Крестик' />
						<div>
							<p>{opponent.username}</p>
							<p>32% побед</p>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
