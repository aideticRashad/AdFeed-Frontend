import React, { FormEvent, useState } from 'react'
import styles from './MFAVerification.module.css';
import CustomButton from '../Button/Button'
import { AuthLLayerArgs } from '../../types/typesDef';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';


function MFAVerification({ type, setType }: AuthLLayerArgs) {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  // const dispatch = useDispatch();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData, "formData at Otp");
    try {

    } catch (error) {
    }
  };

  const inputfocus = (elem: React.KeyboardEvent<HTMLInputElement>) => {
    const target = elem.target as HTMLInputElement;
    if (target) {
      if (elem.key === "Delete" || elem.key === "Backspace") {
        const next = target.tabIndex - 2;
        if (next > -1) {
          ((target.form as HTMLFormElement).elements[next] as HTMLElement).focus();
        }

      } else {
        console.log("next");
        const next = target.tabIndex;
        if (next < 6 && elem.target) {
          ((target.form as HTMLFormElement).elements[next] as HTMLElement).focus();
        }
      }
    }
  };

  return (
    <>
      <form className={styles.MFAVerification}>
        <h6 >
          {`Please enter the 6 digit code of your Microsoft authenticator app`}
        </h6>
        <div className='mt-3'>
          <label className='text-secondary' style={{ fontSize: "10px" }}>OTP</label>
          <div className={styles.otpContainer}>
            <input
              name="otp1"
              type="number"
              autoComplete="off"
              className={styles.otpInput}
              onChange={handleChange}
              tabIndex={1}
              maxLength={1}
              onKeyUp={inputfocus}
            />
            <input
              name="otp2"
              type="number"
              autoComplete="off"
              className={styles.otpInput}
              onChange={handleChange}
              tabIndex={2}
              maxLength={1}
              onKeyUp={(inputfocus)}
            />
            <input
              name="otp3"
              type="number"
              autoComplete="off"
              className={styles.otpInput}
              onChange={handleChange}
              tabIndex={3}
              maxLength={1}
              onKeyUp={inputfocus}
            />
            <input
              name="otp4"
              type="number"
              autoComplete="off"
              className={styles.otpInput}
              onChange={handleChange}
              tabIndex={4}
              maxLength={1}
              onKeyUp={inputfocus}
            />

            <input
              name="otp5"
              type="number"
              autoComplete="off"
              className={styles.otpInput}
              onChange={handleChange}
              tabIndex={5}
              maxLength={1}
              onKeyUp={inputfocus}
            />
            <input
              name="otp6"
              type="number"
              autoComplete="off"
              className={styles.otpInput}
              onChange={handleChange}
              tabIndex={6}
              maxLength={1}
              onKeyUp={inputfocus}
            />
          </div>
        </div>
        <div className='d-flex flex-column gap-4 mt-4'>
          <CustomButton title='Verify OTP' style={{ backgroundColor: "#FF5E06", color: "white" }} fullWidth={true} onClick={handleSubmit} />
          <CustomButton title='Back' variant='outlined' style={{ color: "#FF5E06", outline: "1px solid #FF5E06", border: "none" }} fullWidth={true} onClick={() => setType("Login")} />
        </div>
      </form>
    </>
  );
}


export default MFAVerification
