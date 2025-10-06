import { useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useUser } from '../../../hooks/useUser'

export default function RatingsList() {
	const { token } = useAuth()
	const { ratings, getUserRatings } = useUser()

	useEffect(() => {
		getUserRatings(token)
	}, [token, getUserRatings])

	return (
		<ul>
			{ratings.map(rating => (
				<li>
					<div>
						<p>{rating.full_name}</p>
						<p>{rating.total_games}</p>
						<p>{rating.wins}</p>
						<p>{rating.losses}</p>
						<p>{rating.win_percentage}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
