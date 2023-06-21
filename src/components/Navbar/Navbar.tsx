import React from 'react'
import styles from './Navbar.module.css'
import { person } from '../../data/userData';

interface Props {
  title: string;
}

const Navbar = (props: Props) => {
  const { title } = props;
  return (
    <div className={styles.Navbar}>
      <h3>{title}</h3>
      <div className={styles.container}>
        <img className={styles.dp} src={person.profile_pic} alt="" />
        <div>
          <h6>{person.name}</h6>
          <p>{person.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
