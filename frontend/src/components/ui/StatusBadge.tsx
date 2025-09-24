export function StatusBadge({
	status,
	styles,
}: {
	status: string
	styles: any
}) {
	const isBlocked = status.toLowerCase() === 'заблокирован'
	return (
		<span className={isBlocked ? styles.blocked : styles.active}>
			{isBlocked ? 'Заблокирован' : 'Активен'}
		</span>
	)
}
