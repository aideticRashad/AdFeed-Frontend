import React from 'react'
import styles from './Folders.module.css'
import Layout from '../../../components/Layout/Layout'

const Folders = () => {
  return (
    <div className={styles.Folders}>
      <Layout user={2} title='Folder Management'>
        Folder Management
      </Layout>
    </div>
  )
}

export default Folders
