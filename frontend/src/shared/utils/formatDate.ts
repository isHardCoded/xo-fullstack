export function formatDate(dateString?: string) {
	if (!dateString) return ''
	const date = new Date(dateString)
	// Настроить локаль и опции для отображения, например, 'ru-RU'
	return date.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
}
