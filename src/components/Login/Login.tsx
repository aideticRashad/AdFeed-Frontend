import styles from './Login.module.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthLLayerArgs, loginFormArgs } from '../../types/typesDef';
import CustomButton from '../Button/Button';
import { FormEvent, useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import InputField from '../InputField/InputField';
import { toast } from 'react-toastify';


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
    if (formData.password.length < 8) {
      return toast.error("Password must be 8 characters long")
    }
    setType("SetUpMFA")
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
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <InputField fullWidth={true} label='Email' name='email' sx={{ backgroundColor: "#ededed" }} onChange={(e: any) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))} />
        </div>

        <div className={styles.inputContainer}>
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
              name='password'
              sx={{ backgroundColor: "#ededed" }}
              fullWidth
            />
          </FormControl>
        </div>
        <div className='mt-3 d-flex justify-content-end'>
          <p className={styles.textSpan2} onClick={() => setType("ForgotPassword")}>Forgot password?</p>
        </div>

        <div className="d-grid gap-2">
          <CustomButton type="submit" variant='contained' style={{ width: "100%", backgroundColor: "#FF5E06", color: "white" }} fullWidth={true} title={"Continue"} />
        </div>
      </form>
    </>
  )
}

export default Login;
