import * as React from 'react';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Email from '@mui/icons-material/Email';
import { FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, } from '@mui/material';
import { useForm } from 'react-hook-form';
import useUserStore from '../context/user-context';
import { ChadrackImage, LebronJames } from "../images/index"
import { Link, useNavigate } from 'react-router-dom';
import BasicButton from "../components/button";

export default function UpdataData({ onLoginSubmit }) {

    const { email, isLogged, upDateIsLogged } = useUserStore()

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
      upDateIsLogged();
      handleNavigate();
      reset();
    }
  
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                {/* <h1 className="text-[#319484] relative top-5 text-center text-4xl">Registre</h1> */}
                <div className="flex justify-center mt-10">
                    <div className="w-[950px] min-h-screen bg-white rounded">
                        <div className="flex justify-center items-center mt-10 mb-10 gap-20">
                            <div className="flex items-center flex-col flex-wrap">
                                <div className="absolute">
                                    <img src={ChadrackImage} alt="" className="rounded-full w-40 h-40 border-4 border-white shadow-lg" />
                                </div>
                                
                                <div className="w-[400px] flex flex-col items-center bg-gray-100 rounded p-5 mt-20">
                                <form className='flex justify-center mt-20' onSubmit={handleSubmit(onSubmit)}>
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
                                    </div>
                                </form>
                                    <div className='flex pl-10 mt-10'>
                                        <BasicButton textButton="Mettre à jour" styleButton="w-60 h-14" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}