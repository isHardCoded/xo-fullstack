import GameBoard from '../../components/elements/GameBoard/GameBoard'
import GameResultModal from '../../components/elements/GameResultModal/Index'
import { useAuth } from '../../context/AuthContext'
import { useTicTacToe } from '../../hooks/useTicTacToe'
import Layout from '../../layouts/Layout'

import styles from './index.module.scss'

export default function DashboardPage() {
	const { user, token } = useAuth()

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
					{/* {winner && <p>Победитель: {winner === 'draw' ? 'Ничья' : winner}</p>} */}
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
						<GameResultModal />
					</div>
				)}
			</Layout>
		</>
	)
}
