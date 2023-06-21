import React, { useState, FormEvent } from 'react';
import styles from './ForgotPassword.module.css';
import CustomButton from '../Button/Button';
import { AuthLLayerArgs } from '../../types/typesDef';

type FormPasswordArgs = {
    email: string
}


const ForgotPassword = ({ type, setType }: AuthLLayerArgs) => {
    const [formData, setFormData] = useState<FormPasswordArgs>({
        email: ''
    })
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(formData, 'formData')
    }
    return (
        <div className={styles.ForgotPassword}>
            <h4 className={styles.title}>
                Forgot Password
            </h4>
            <form action="">
                <div className={styles.inputContainer}>
                    <label className={styles.infoLabel} htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className={styles.infoInput}
                        name="email"
                        onChange={(e) => { setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })) }}
                        required
                    />
                </div>
                <div className='d-flex flex-column gap-4 mt-4'>
                    <CustomButton title='Send reset password link' style={{ backgroundColor: "#FF5E06", color: "white" }} fullWidth={true} onClick={handleSubmit} />
                    <CustomButton title='Back' variant='outlined' style={{ color: "#FF5E06", outline: "1px solid #FF5E06", border: "none" }} fullWidth={true} onClick={() => setType("Login")} />
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword