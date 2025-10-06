import { useAuth } from '../../context/AuthContext'
import { useTicTacToe } from '../../hooks/useTicTacToe'
import Layout from '../../layouts/Layout'

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
				<div>
					<h2>Крестики-нолики</h2>
					<p>Ход: {turn}</p>
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							maxWidth: 300,
						}}
					>
						{cells.map((cell, index) => (
							<div
								style={{
									width: 100,
									height: 100,
									border: '1px solid gainsboro',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									fontSize: 20,
									cursor: cell ? 'not-allowed' : 'pointer',
								}}
								onClick={() => handleClick(index)}
							>
								{cell}
							</div>
						))}
					</div>
					{winner && <p>Победитель: {winner === 'draw' ? 'Ничья' : winner}</p>}
				</div>
			</Layout>
		</>
	)
}
