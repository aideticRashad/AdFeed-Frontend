import styles from './SetUpRequest.module.css'
import CustomButton from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { AuthLLayerArgs } from '../../types/typesDef';

const SetUpRequest = ({ type, setType }: AuthLLayerArgs) => {
  const navigate = useNavigate();
  return (
    <div className={styles.SetUpRequest}>
      <h6 >
        You need to set up your account before proceeding.
      </h6>
      <div className='d-flex flex-column gap-4 mt-4'>
        <CustomButton type="button" title='Setup MFA' style={{ backgroundColor: " #FF5E06", color: "white" }} fullWidth={true} onClick={() => navigate('/set-mfa')} />
        <CustomButton type="button" title='Back' variant='outlined' style={{ color: "#FF5E06", outline: "1px solid #FF5E06", border: "none" }} fullWidth={true} onClick={() => setType("Login")} />
      </div>
    </div>
  )
}

export default SetUpRequest