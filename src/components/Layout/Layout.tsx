import React from 'react'
import styles from './Layout.module.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

type LayoutProps = {
  user: number,
  title: string,
  children: React.ReactNode
}

const Layout = ({ user, title, children }: LayoutProps) => {
  return (
    <div className={styles.Layout}>
      <Sidebar user={user} />
      <div className={styles.rightContainer}>
        <Navbar title={title} />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
