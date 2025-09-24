import { useState } from 'react'
import React from 'react'
import styles from './LoginForm.module.scss'
import { useAuth } from '../../../../context/AuthContext'
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

export default function LoginForm() {
	const [data, setData] = useState<IData>(initialData)
	const { login } = useAuth()
	const navigate = useNavigate()

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		try {
			await login(data)
			navigate('/dashboard')
		} catch (e) {
			console.log(`Error: ${e}`)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<h2>Вход</h2>
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
					value={data.password}
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
