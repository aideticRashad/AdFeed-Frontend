import React from 'react'
import styles from './UserManagement.module.css'
import Layout from '../../../components/Layout/Layout'

const UserManagement = () => {
  return (
    <div className={styles.UserManagement}>
      <Layout user={2} title='User Management'>
        User Management
      </Layout>
    </div>
  )
}

export default UserManagement
