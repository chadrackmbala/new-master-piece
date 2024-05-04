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

export default function SignUp({ onLoginSubmit }) {

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
        e.preventDefault();
        upDateIsLogged();
        handleNavigate();
        // reset();
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-gray-100 min-h-screen">
                <div className="flex justify-center">
                    <div className="w-[950px] min-h-screen bg-white rounded mt-10">
                    <h2 className="text-[#319484] font-medium text-center mt-10 text-2xl">Bienvenue dans Loango App</h2>
                        <div className="flex justify-center items-center mt-10 mb-10 gap-20">
                            <div className="flex items-center flex-col flex-wrap">
                                <div className="absolute">
                                    <label htmlFor="fileInput">
                                        Mettez une photo ici
                                        <input id="fileInput" type="file" />
                                    </label>

                                </div>
                                <div className="w-[900px] flex flex-col items-center bg-gray-100 rounded p-5 mt-20">
                                    <div className='flex w-[900px] flex-wrap gap-10 justify-center mt-20'>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Nom"
                                                variant="outlined"
                                                name='nom'
                                                {...register("nom", {
                                                    required: "Veuillez écrire le nom svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le nom est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le nom est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.nom && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.nom.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Postnom"
                                                variant="outlined"
                                                name='postnom'
                                                {...register("postnom", {
                                                    required: "Veuillez écrire le postnom svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le postnom est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le postnom est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.postnom && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.postnom.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Prénom"
                                                variant="outlined"
                                                name='prenom'
                                                {...register("prenom", {
                                                    required: "Veuillez écrire le prénom svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le prénom est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le prénom est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.prenom && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.prenom.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Université"
                                                variant="outlined"
                                                name='universite'
                                                {...register("universite", {
                                                    required: "Veuillez écrire l'université svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le texte est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le texte est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.universite && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.universite.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Département"
                                                variant="outlined"
                                                name='departement'
                                                {...register("departement", {
                                                    required: "Veuillez écrire un département svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le texte est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le texte est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.departement && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.departement.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Faculté"
                                                variant="outlined"
                                                name='faculte'
                                                {...register("faculte", {
                                                    required: "Veuillez écrire une faculté svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le texte est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le texte est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.faculte && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.faculte.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Promotion"
                                                variant="outlined"
                                                name='promotion'
                                                {...register("promotion", {
                                                    required: "Veuillez écrire une promotion svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le texte est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le texte est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.promotion && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.promotion.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Email"
                                                variant="outlined"
                                                name='email'
                                                {...register("email", {
                                                    required: "Veuillez écrire un email svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le texte est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le texte est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.email && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Adresse"
                                                variant="outlined"
                                                name='adresse'
                                                {...register("adresse", {
                                                    required: "Veuillez écrire une adresse svp !",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Le texte est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le texte est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.adresse && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.adresse.message}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex pl-10 mt-10'>
                                        <BasicButton textButton="Soumettre" styleButton="w-60 h-14" />
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