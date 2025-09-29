import { useEffect, type ReactNode } from 'react'
import Header from '../components/elements/Header/Header'
import { useInvitations } from '../hooks/useInvitations'
import { useAuth } from '../context/AuthContext'
import InvitationList from '../components/containers/InvitationList/InvitationList'

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const { message } = useInvitations()

	console.log(message)

	return (
		<>
			<Header />
			<InvitationList />
			<div>
				<p>Приглашение успешно отправлено: {message.to_user}</p>
			</div>
			<main>{children}</main>
		</>
	)
}
