import styles from './GameBoard.module.scss'

interface GameBoardProps {
	cells: (string | null)[]
	handleClick: (index: number) => void
}

export default function GameBoard({ cells, handleClick }: GameBoardProps) {
	return (
		<div className={styles.gameBoard}>
			{cells.map((cell, index) => (
				<div
					className={styles.cell}
					style={{
						cursor: cell ? 'not-allowed' : 'pointer',
					}}
					onClick={() => handleClick(index)}
				>
					{cell === 'X' ? (
						<img src='./cross.svg' alt='Крестик' />
					) : cell === '0' ? (
						<img src='./zero.svg' alt='Нолик'></img>
					) : null}
				</div>
			))}
		</div>
	)
}
