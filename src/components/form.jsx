import * as React from 'react';
import TextField from '@mui/material/TextField';
import BasicButton from './button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Email from '@mui/icons-material/Email';
import { FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, } from '@mui/material';
import { useForm } from 'react-hook-form';
import useUserStore from '../context/user-context';
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from './google-button';

export default function Form({ onLoginSubmit }) {

  const { email, isLogged, upDateIsData, login } = useUserStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("./home");
  }

  const onSubmit = (data) => {
    console.log("Succès");
    console.log("Email :", data.email, "Password :", data.password);
   login(data, ()=> {
    reset();
    handleNavigate();
   })
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <form className='flex justify-center' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col justify-center'>
        {/* <h1 className='mb-4 text-2xl text-[#319484]'>Loango App</h1> */}
        <div className='flex gap-3 flex-col mt-5 mb-5'>
          <div className='flex flex-col'>
            <TextField
              className='w-60'
              id="outlined-password-input"
              label="Adresse E-mail"
              type="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className='text-[#319484]' />
                  </InputAdornment>
                ),
              }}
              name='email'
              {...register("email", {
                required: "Ce champ est obligatoire !",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Votre adresse email n'est pas valide !"
                }
              })}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</span>
            )}
          </div>

          <div className='flex flex-col'>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Mot de passe</InputLabel>
              <OutlinedInput className='w-60'
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff className='text-[#319484]' /> : <Visibility className='text-[#319484]' />}
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
              <span style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</span>
            )}
          </div>
        </div>
        <BasicButton textButton="Connexion" styleButton="w-60 h-14" />
        <GoogleButton />
        <div className='flex pl-14'>
          <Link to="/sign-up" className='text-[#319484] ml-5 hover:underline underline-offset-1 hover:-translate-y-1 hover:scale-110 duration-300'>S'inscrire ?</Link>
        </div>
        <div className='flex pl-10'>
          <Link className='text-[#319484] hover:underline underline-offset-1 hover:-translate-y-1 hover:scale-110 duration-300'>Mot de passe oublé ?</Link>
        </div>
      </div>
    </form>
  );
}
