import React, { FormEvent, useState } from 'react'
import styles from './ResetPassword.module.css'
import { ResetPasswordArgs } from '../../types/typesDef'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CustomButton from '../Button/Button';

const ResetPassword = () => {
    const [formData, setFormData] = useState<ResetPasswordArgs>({
        password: '',
        password1: ''
    })
    const [passVisibility, setPassVisibility] = useState<boolean>(false)
    const [passVisibility1, setPassVisibility1] = useState<boolean>(false)

    const handlePassVisibility = () => {
        const element: any = document.getElementById('password')
        if (passVisibility) {
            element.type = "password"
            setPassVisibility(false)
        } else {
            element.type = "text"
            setPassVisibility(true)
        }
    }

    const handlePassVisibility1 = () => {
        const element: any = document.getElementById('password1')
        if (passVisibility1) {
            element.type = "password"
            setPassVisibility1(false)
        } else {
            element.type = "text"
            setPassVisibility1(true)
        }
    }

    const handleSubmit = (e: FormEvent) => {
        console.log(formData,'formData')
    }
    return (
        <div className={styles.ResetPassword}>
            <h4 className={styles.title}>
                Forgot Password
            </h4>
            <form action="">
                <div className={styles.inputContainer}>
                    <label className={styles.infoLabel} htmlFor="password">New Password</label>
                    <div className='d-flex align-items-center'>
                        <input
                            type="password"
                            placeholder="Min. 8 characters"
                            className={styles.infoInput}
                            id='password'
                            name="password"
                            onChange={(e) => { setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })) }}
                            required
                        />
                        {passVisibility ? (<VisibilityOffIcon onClick={handlePassVisibility} className={styles.faIcon} />) : (<VisibilityIcon onClick={handlePassVisibility} className={styles.faIcon} />)}
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.infoLabel} htmlFor="password">Confirm Password</label>
                    <div className='d-flex align-items-center'>
                        <input
                            type="password"
                            placeholder="Min. 8 characters"
                            className={styles.infoInput}
                            id='password1'
                            name="password1"
                            onChange={(e) => { setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })) }}
                            required
                        />
                        {passVisibility1 ? (<VisibilityOffIcon onClick={handlePassVisibility1} className={styles.faIcon} />) : (<VisibilityIcon onClick={handlePassVisibility1} className={styles.faIcon} />)}
                    </div>
                </div>
                <div className='d-flex flex-column gap-4 mt-4'>
                    <CustomButton title='Continue & Setup MFA' style={{ backgroundColor: "#FF5E06", color: "white" }} fullWidth={true} onClick={handleSubmit} />
                    <CustomButton title='Back' variant='outlined' style={{ color: "#FF5E06", outline: "1px solid #FF5E06", border: "none" }} fullWidth={true} onClick={() => console.log("Back")} />
                </div>
            </form>
        </div>
    )
}

export default ResetPassword