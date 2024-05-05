import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFoot from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import BasicButton from '../components/button';
import Register from '../components/register-table';
import { Outlet } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 1),
    createData('Ice cream sandwich', 2),
    createData('Eclair', 3),
    createData('Cupcake', 4),
    createData('Gingerbread', 5),
];

let total = 0;

rows.forEach(element => {
    let calorie = Number(element.calories)
    total = total + calorie;
});

export default function Administration() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Succès");
        console.log("Email :", data.email, "Password :", data.password);
        upDateIsLogged();
        handleNavigate();
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-gray-100 min-h-screen pt-10">
                <div className='felx justify-center'>
                    <div className="flex flex-col items-center  justify-center">
                        <h2 className="text-[#319484] relative top-5 text-center text-4xl">Publication de lactivité</h2><br /><br />
                        <div className='w-10/12 h-96 p-5 bg-white rounded-lg flex flex-col justify-center items-center gap-4'>
                            <input type="file" />
                            <TextareaAutosize
                                className='w-72 rounded-lg border-2 border-gray-300 focus:border-[#319484] outline-none transition-colors duration-300 ease-in-out'
                                name="inputContent"
                                {...register("inputContent", {
                                    required: "Veuillez écrire une description svp !",
                                    maxLength: {
                                        value: 300,
                                        message: "Votre message est trop long !"
                                    },
                                    pattern: {
                                        value: /\S/,
                                        message: "Votre message est trop long !"
                                    }
                                })}
                            />
                            {errors.inputContent && (
                                <span style={{ color: "red", fontSize: "12px" }}>{errors.inputContent.message}</span>
                            )}
                            <BasicButton textButton="Publier" styleButton="w-60 h-14" />
                        </div>
                        <h2 className="text-[#319484] relative top-5 text-center text-4xl">Registre des Etudiants</h2><br /><br />
                        <Register />
                    </div>
                </div>
                {/* <Outlet /> */}

            </div>
        </form>
    )
}