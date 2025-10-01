import { useState } from 'react'
import type { User } from '../shared/types/User'

function defineWinner(cells: string[]) {
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
		if (cells.every(Boolean)) return 'draw'
		return null
	}
}

export function useTicTacToe(me: User, opponent: User, token: string) {
	const [cells, setCells] = useState<(string | null)[]>(Array(9).fill(null))
	const [turn, setTurn] = useState<'X' | '0'>('X')
}
