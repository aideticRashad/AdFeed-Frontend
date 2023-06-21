import styles from './Auth.module.css'
import AuthRLayer from '../../components/AuthRLayer/AuthRLayer';
import AuthLLayer from '../../components/AuthLLayer/AuthLLayer';

const Auth = () => {

  return (
    <div className={styles.Auth}>
      <AuthLLayer />
      <AuthRLayer />
    </div >
  )
}

export default Auth
