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
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-gray-100 min-h-screen">
                <div className="flex justify-center mt-10">
                    <div className="w-[950px] min-h-screen bg-white rounded">
                        <div className="flex justify-center items-center mt-10 mb-10 gap-20">
                            <div className="flex items-center flex-col flex-wrap">
                                <div className="absolute">
                                    <img src={ChadrackImage} alt="" className="rounded-full w-40 h-40 border-4 border-white shadow-lg" />
                                </div>
                                <div className="w-[400px] flex flex-col items-center bg-gray-100 rounded p-5 mt-20">
                                    <div className='flex justify-center mt-20'>
                                        <div className='flex flex-col justify-center'>
                                            <div className='flex gap-3 flex-col mt-5 mb-5'>
                                                <div className='flex flex-col'>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Outlined"
                                                        variant="outlined"
                                                        name='nom'
                                                        {...register("nom", {
                                                            required: "Ce champ est obligatoire !",
                                                            pattern: {
                                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                message: "Votre adresse email n'est pas valide !"
                                                            }
                                                        })}
                                                    />
                                                    {errors.nom && (
                                                        <span style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex pl-10 mt-10'>
                                        <BasicButton textButton="Mettre à jour" styleButton="w-60 h-14" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}