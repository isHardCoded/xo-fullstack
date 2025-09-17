import type { ReactNode } from 'react'
import Header from '../components/header/Header'

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}
