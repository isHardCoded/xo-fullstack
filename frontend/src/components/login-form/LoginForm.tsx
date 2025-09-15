import { useState } from 'react'
import React from 'react'
import { USER_SERVICE } from '../../services/User.service'

interface IData {
	username: string
	password: string
	email: string
	full_name: string
}

const initialData: IData = {
	username: '',
	password: '',
	email: '',
	full_name: '',
}

export default function LoginForm() {
	const [data, setData] = useState<IData>(initialData)

	function handleChange(e: React.FormEvent<HTMLInputElement>) {
		setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		try {
			const response = await USER_SERVICE.login(data)
			console.log(await response.json())
		} catch (error) {
			console.log(`Ошибка: ${error}`)
		}
	}

	return (
		<form onSubmit={handleSumbit} className={styles.form}>
			<h2>Вход</h2>
			<div>
				<input
					value={username}
					name='username'
					type='text'
					placeholder='Имя пользователя'
					onChange={handleChange}
					required
				/>
				<input
					value={password}
					name='password'
					onChange={handleChange}
					type='password'
					placeholder='Пароль'
					required
				/>
				<button type='submit'>Войти</button>
			</div>
		</form>
	)
}
