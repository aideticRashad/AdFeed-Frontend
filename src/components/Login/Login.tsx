import styles from './Login.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthLLayerArgs, loginFormArgs } from '../../types/typesDef';
import CustomButton from '../Button/Button';
import { FormEvent, useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import InputField from '../InputField/InputField';


const Login = ({ type, setType }: AuthLLayerArgs) => {
  // const [passVisibility, setPassVisibility] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [formData, setFormData] = useState<loginFormArgs>({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handlePassVisibility = () => {
  //   const element: any = document.getElementById('password')
  //   if (passVisibility) {
  //     element.type = "password"
  //     setPassVisibility(false)
  //   } else {
  //     element.type = "text"
  //     setPassVisibility(true)
  //   }
  // }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData, 'asdaa')
    // setType("SetUpMFA")
    // console.log(formData, 'formData');
    // dispatch(showLoading());
    // loginFunction(formData).then((res: any) => {
    //   dispatch(hideLoading())
    //   setType('MFAVerification')
    //   navigate('/home');
    // }).catch((err: any) => {
    //   dispatch(hideLoading())
    //   if (err.response?.data?.detail) {
    //     return toast.error(err.response?.data?.detail)
    //   }
    //   if (err?.response?.data?.message) {
    //     return toast.error(err.response?.data?.message)
    //   }
    //   console.log(err, 'sdas');
    //   toast.error(err.message)
    // })
  }
  return (
    <>
      <h4 className={styles.title}>Nice to see you again.</h4>
      <form action="">
        <div className={styles.inputContainer}>
          {/* <label className={styles.infoLabel} htmlFor="email">Email*</label>
          <input
            type="email"
            placeholder="abcd@qwerty.com"
            className={styles.infoInput}
            name="email"
            onChange={(e) => { setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value })) }}
            required
          /> */}
          <InputField fullWidth={true} label='Email' name='email' sx={{ backgroundColor: "#e1e0e0" }} onChange={(e: any) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
        </div>

        <div className={styles.inputContainer}>
          {/* <label className={styles.infoLabel} htmlFor="password">Password*</label>
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
          </div> */}
          <FormControl variant="outlined" size="small">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={(e: any) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              label="Password"
              sx={{ backgroundColor: "#e1e0e0" }}
              fullWidth
            />
          </FormControl>
        </div>
        <div className='mt-3 d-flex justify-content-end'>
          <p className={styles.textSpan2} onClick={() => setType("ForgotPassword")}>Forgot password?</p>
        </div>

        <div className="d-grid gap-2">
          <CustomButton variant='contained' style={{ width: "100%", backgroundColor: "#FF5E06", color: "white" }} fullWidth={true} title={"Continue"} onClick={handleSubmit} />
        </div>
      </form>
    </>
  )
}

export default Login;
