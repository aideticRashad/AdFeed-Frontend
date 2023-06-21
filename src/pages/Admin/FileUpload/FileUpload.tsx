import React from 'react'
import styles from './FileUpload.module.css'
import Layout from '../../../components/Layout/Layout'

const FileUpload = () => {
  return (
    <div className={styles.FileUpload}>
      <Layout user={2} title='File Upload'>
        <h1>File Upload</h1>
      </Layout>
    </div>
  )
}

export default FileUpload
