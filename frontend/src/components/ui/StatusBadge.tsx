export function StatusBadge({
	status,
	styles,
}: {
	status: string
	styles: any
}) {
	const isBlocked = status === 'blocked'
	return (
		<span className={isBlocked ? styles.blocked : styles.active}>
			{isBlocked ? 'Заблокирован' : 'Активен'}
		</span>
	)
}
