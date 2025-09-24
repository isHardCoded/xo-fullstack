import React, { useState } from 'react'
import styles from './RegisterForm.module.scss'
import { USER_SERVICE } from '../../../../services/User.service'
import { useNavigate } from 'react-router-dom'

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

export default function RegisterForm() {
	const [data, setData] = useState<IData>(initialData)
	const navigate = useNavigate()

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	async function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		try {
			await USER_SERVICE.register(data)
			navigate('/login')
		} catch (error) {
			console.log(`Ошибка: ${error}`)
		}
	}

	return (
		<form onSubmit={handleSumbit} className={styles.form}>
			<h2>Регистрация</h2>
			<div>
				<input
					value={data.username}
					name='username'
					type='text'
					placeholder='Имя пользователя'
					onChange={handleChange}
					required
				/>
				<input
					value={data.email}
					name='email'
					type='email'
					placeholder='Почта'
					onChange={handleChange}
					required
				/>
				<input
					value={data.full_name}
					name='full_name'
					type='text'
					placeholder='ФИО'
					onChange={handleChange}
					required
				/>
				<input
					value={data.password}
					name='password'
					onChange={handleChange}
					type='password'
					placeholder='Пароль'
					required
				/>
				<button type='submit'>Зарегистрироваться</button>
			</div>
		</form>
	)
}
