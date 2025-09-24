import ActiveUserList from '../../components/containers/ActiveUserList/ActiveUserList'
import Layout from '../../layouts/Layout'
import styles from './index.module.scss'

export default function ActiveUsersPage() {
	return (
		<>
			<Layout>
				<ActiveUserList />
			</Layout>
		</>
	)
}
