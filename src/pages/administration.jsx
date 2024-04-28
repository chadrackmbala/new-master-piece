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
import Register from '../components/register';

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
    return (
        <>
            <div className="bg-gray-100 min-h-screen pt-10">
                <div className='felx justify-center'>
                    <div className="flex flex-col items-center  justify-center">
                        <h2 className="text-[#319484] relative top-5 text-center text-4xl">Publication de lactivité</h2><br /><br />
                        <div className='w-10/12 h-96 p-5 bg-white rounded-lg flex flex-col justify-center items-center gap-4'>
                            <input type="file" />
                            <TextareaAutosize
                                className='w-72 rounded-lg border-2 border-gray-300 focus:border-[#319484] outline-none transition-colors duration-300 ease-in-out'
                                maxLength={300}
                            />
                            <BasicButton textButton="Publier" styleButton="w-60 h-14" />
                        </div>
                        <h2 className="text-[#319484] relative top-5 text-center text-4xl">Registre des Etudiants</h2><br /><br />
                        {/* <TableContainer className=" w-11/12" component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className='font-bold text-sm'>Etudiants</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">Université</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">Faculté</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">Département</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">Prommotion</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">E-mail</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">Téléphone</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">Domicile</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFoot>
                                    <TableRow>
                                        <TableCell className='font-bold text-2xl'>Total</TableCell>
                                        <TableCell className='font-bold text-2xl' align="right">{total}</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">{total}</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">{total}</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">{total}</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">{total}</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">{total}</TableCell>
                                        <TableCell className='font-bold text-sm' align="right">{total}</TableCell>
                                    </TableRow>
                                </TableFoot>
                            </Table>
                        </TableContainer> */}
                        <Register />
                    </div>
                </div>

            </div>

        </>
    )
}