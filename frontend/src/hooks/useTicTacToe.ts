import { useCallback, useEffect, useState } from 'react'
import type { User } from '../shared/types/User'
import { GAME_SERVICE } from '../services/Game.service'

function defineWinner(cells: (string | null)[]) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (const [a, b, c] of lines) {
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return cells[a]
		}
	}

	if (cells.every(Boolean)) return 'draw'
	return null
}

export function useTicTacToe(
	me: User,
	opponent: User,
	mySign: 'X' | '0',
	token: string
) {
	const [cells, setCells] = useState<(string | null)[]>(Array(9).fill(null))
	const [turn, setTurn] = useState<'X' | '0'>('X')
	console.log(turn)

	const winner = defineWinner(cells)

	useEffect(() => {
		if (winner) {
			const winnerUserId =
				winner === 'draw' ? null : winner === mySign ? me.id : opponent.id

			const payload = {
				player_x: mySign === 'X' ? me.id : opponent.id,
				player_o: mySign === '0' ? me.id : opponent.id,
				winner: winnerUserId,
				result: {
					board: cells,
				},
			}

			console.log(payload)

			GAME_SERVICE.postGameResult(payload, token).catch(console.error)
		}
	}, [winner])

	const handleClick = useCallback(
		(index: number) => {
			if (cells[index] || winner) return

			const next = [...cells]
			next[index] = turn
			setCells(next)

			setTurn(turn === 'X' ? '0' : 'X')
		},
		[cells, winner, turn, mySign]
	)

	return { cells, handleClick, winner, turn }
}
