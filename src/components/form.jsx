import * as React from 'react';
import TextField from '@mui/material/TextField';
import BasicButton from './button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Email from '@mui/icons-material/Email';
import { FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import useUserStore from '../context/user-context';

export default function Form({ onLoginSubmit }) {

  const { isLogged, upDateIsLogged } = useUserStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Succès");
    console.log("Email :", data.email, "Password :", data.password);
    upDateIsLogged(isLogged);
    alert(isLogged);
    reset();
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <form className='' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='mb-8 text-2xl'>Bienvenue</h1>
      <div className='flex flex-col mb-8'>
        <TextField className='w-80 mb-8'
          id="outlined-password-input"
          label="E-mail"
          type="email"
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <Email />
              </InputAdornment>
            ),
          }}
          name='email'
          {...register("email", {
            required: "Ce champ est oblogatoire !",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Votre adresse email n'est valide !"
            }
          })}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput className='w-80'
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name='password'
            {...register("password", {
              required: "Ce champ est oblogatoire !",
            })}
          />
        </FormControl>
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
      </div>
      <BasicButton />
    </form>
  );
}
