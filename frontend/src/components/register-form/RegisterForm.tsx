import React, { useState } from 'react'
import styles from './RegisterForm.module.scss'
import { USER_SERVICE } from '../../services/User.service'

export default function RegisterForm() {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [fullName, setFullName] = useState<string>('')

	async function handleSumbit(e: React.FormEvent) {
		e.preventDefault()

		try {
			const response = await USER_SERVICE.register({
				username,
				email,
				full_name: fullName,
				password,
			})
			console.log(await response.json())
		} catch (error) {
			console.log(`Ошибка: ${error}`)
		}
	}

	return (
		<form onSubmit={handleSumbit} className={styles.form}>
			<h2>Регистрация</h2>
			<div>
				<input
					value={username}
					type='text'
					placeholder='Имя пользователя'
					onChange={e => setUsername(e.target.value)}
					required
				/>
				<input
					value={email}
					type='email'
					placeholder='Почта'
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<input
					value={fullName}
					type='text'
					placeholder='ФИО'
					onChange={e => setFullName(e.target.value)}
					required
				/>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='password'
					placeholder='Пароль'
					required
				/>
				<button type='submit'>Зарегистрироваться</button>
			</div>
		</form>
	)
}
