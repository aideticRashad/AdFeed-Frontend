import React, { useState, FormEvent } from 'react';
import styles from './ForgotPassword.module.css';
import CustomButton from '../Button/Button';
import { AuthLLayerArgs } from '../../types/typesDef';
import InputField from '../InputField/InputField';
import { toast } from 'react-toastify';

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
        if (!formData.email) return toast.error("Please enter a valid email.")
        if (formData.email.split('@')[1] !== 'advisoryfeedback.com') return toast.error("There is no account related to this email. Please enter a valid email address.")
    }
    return (
        <div className={styles.ForgotPassword}>
            <h4 className={styles.title}>
                Forgot Password
            </h4>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <InputField fullWidth={true} label='Email' name='email' sx={{ backgroundColor: "#ededed" }} onChange={(e: any) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
                </div>
                <div className='d-flex flex-column gap-4 mt-4'>
                    <CustomButton type="submit" title='Send reset password link' style={{ backgroundColor: "#FF5E06", color: "white" }} fullWidth={true} />
                    <CustomButton type="button" title='Back' variant='outlined' style={{ color: "#FF5E06", outline: "1px solid #FF5E06", border: "none" }} fullWidth={true} onClick={() => setType("Login")} />
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword