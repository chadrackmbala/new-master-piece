import * as React from 'react';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Email from '@mui/icons-material/Email';
import { FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, } from '@mui/material';
import { useForm } from 'react-hook-form';
import BasicButton from "../components/button";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp({ onLoginSubmit }) {

  const handleNavigate = () => {
    navigate("./home");
  }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        let newUser;

        newUser = {
            nom: data.nom,
            postnom: data.postnom,
            prenom: data.prenom,
            universite: data.universite,
            faculte: data.faculte,
            departement: data.departement,
            promotion: data.promotion,
            email: data.email,
            adresse: data.adresse,
            telephone: data.telephone,
            motDePasse: data.password,
            comfirmMotDePasse: data.confirmPassword,
            role: data.role
        }
        try {
            const response = await axios.post('/users', newUser);
            toast.dismiss();
            toast.success(response.data?.message || 'Success')
            reset();
            handleNavigate();
        } catch (error) {
          const response = error.response.data?.message
            console.error("Une erreur s'est produite:", error);
            toast.dismiss();
            toast.error(response || "Une erreur s'est produite lors de l'envoi des données");
        }
        console.log(newUser);
    }

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
                                                        value: 30,
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
                                                        value: 50,
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
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Téléphone"
                                                variant="outlined"
                                                name='telephone'
                                                {...register("telephone", {
                                                    required: "Veuillez écrire une adresse svp !",
                                                    maxLength: {
                                                        value: 50,
                                                        message: "Le texte est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le texte est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.telephone && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.telephone.message}</span>
                                            )}
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <TextField className='w-60'
                                                id="outlined-basic"
                                                label="Mot de passe"
                                                variant="outlined"
                                                name='password'
                                                {...register("password", {
                                                    required: "Veuillez écrire une adresse svp !",
                                                    maxLength: {
                                                        value: 50,
                                                        message: "Le texte est trop long !"
                                                    },
                                                    pattern: {
                                                        value: /\S/,
                                                        message: "Le texte est trop long !"
                                                    }
                                                })}
                                            />
                                            {errors.password && (
                                                <span style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</span>
                                            )}
                                            <div className='flex flex-col gap-1'>
                                                <TextField className='w-60'
                                                    id="outlined-basic"
                                                    label="Confirmer le mot de passe"
                                                    variant="outlined"
                                                    name='confirmPassword'
                                                    {...register("confirmPassword", {
                                                        required: "Veuillez écrire une adresse svp !",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Le numéro n'est pas valide !"
                                                        },
                                                        pattern: {
                                                            value: /\S/,
                                                            message: "Le numéro n'est pas valide !"
                                                        }
                                                    })}
                                                />
                                                {errors.confirmPassword && (
                                                    <span style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword.message}</span>
                                                )}
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <TextField className='w-60'
                                                    id="outlined-basic"
                                                    label="Role"
                                                    variant="outlined"
                                                    name='role'
                                                    {...register("role", {
                                                        required: "Veuillez écrire une adresse svp !",
                                                        maxLength: {
                                                            value: 50,
                                                            message: "Le numéro n'est pas valide !"
                                                        },
                                                        pattern: {
                                                            value: /\S/,
                                                            message: "Le numéro n'est pas valide !"
                                                        }
                                                    })}
                                                />
                                                {errors.role && (
                                                    <span style={{ color: "red", fontSize: "12px" }}>{errors.role.message}</span>
                                                )}
                                            </div>
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