import React from 'react'
import styles from './Home.module.css'
import Layout from '../../components/Layout/Layout'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Layout user={2} title='Folders'>
        Content
      </Layout>
    </div>
  )
}

export default Home
