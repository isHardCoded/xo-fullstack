export function StatusBadge({
	status,
	styles,
}: {
	status: string
	styles: any
}) {
	const isFree = status === 'free'
	return (
		<span className={isFree ? styles.free : styles.in_game}>
			{isFree ? 'Свободен' : 'В игре'}
		</span>
	)
}
