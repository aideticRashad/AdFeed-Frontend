import React from 'react'
import styles from './SetMFA.module.css'
import Logo from '../../images/adFeed_logo.png'
import { toast } from 'react-toastify';
import QR from '../../images/qr.png'
import CustomButton from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';

const SetMFA = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.SetMFA}>
            <div className={styles.leftSide}>
                <div className='d-flex flex-column w-100 px-4'>
                    <div className='my-5 '>
                        <img src={Logo} alt="AdFeed Logo" />
                    </div>
                    <div>
                        <h4 className={styles.title}>Set up MFA</h4>
                        <div className='mt-4'>
                            <h6>Steps to be followed:</h6>
                            <ol className='mt-4'>
                                <li>
                                    Please download the Authenticator app on your smartphone.
                                </li>
                                <li>
                                    Add the website.
                                </li>
                                <li>
                                    Scan the QR code.
                                </li>
                                <li>
                                    Click on the finish setup.
                                </li>
                            </ol>
                            <div className='d-flex flex-column gap-4 mt-4'>
                                <CustomButton type="button" title='Finish Setup' style={{ backgroundColor: " #FF5E06", color: "white" }} fullWidth={true} onClick={() => { toast.info("Are you sure you have successfully scanned the QR on your smartphone.") }} />
                                <CustomButton type="button" title='Back' variant='outlined' style={{ color: "#FF5E06", outline: "1px solid #FF5E06", border: "none" }} fullWidth={true} onClick={() => navigate("/")} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-auto'>
                        <p>©Feedback Advisory 2023</p>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.container}>
                    <img src={QR} alt="QR Code" style={{ height: "28rem" }} />
                    <div className={styles.buttonContainer}>
                        <CustomButton type="button" title='Finish Setup' style={{ backgroundColor: " #FF5E06", color: "white" }} fullWidth={true} onClick={() => { toast.info("Are you sure you have successfully scanned the QR on your smartphone.") }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetMFA