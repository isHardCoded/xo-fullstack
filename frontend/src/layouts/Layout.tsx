import { useEffect, type ReactNode } from 'react'
import Header from '../components/elements/Header/Header'
import { useInvitations } from '../hooks/useInvitations'
import { useAuth } from '../context/AuthContext'

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const { invitations, getInvitations } = useInvitations()
	const { user, token } = useAuth()

	useEffect(() => {
		getInvitations(user?.id, token)
	}, [])

	console.log(invitations)

	return (
		<>
			<Header />
			<div>
				{/* {invitations.map(invitation => (
					<span>{invitation}</span>
				))} */}
			</div>
			<main>{children}</main>
		</>
	)
}
