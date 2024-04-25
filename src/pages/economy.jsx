// import BasicTable from "../components/basic-table";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFoot from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function Economy() {
    return (
        <div className=''>
            <h2 className="text-[#319484] relative top-5 text-center text-4xl">Club d'Economie</h2><br /><br />
            <div className='flex justify-center'>
            <TableContainer className=" w-3/4" component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='font-bold text-2xl'>Participants</TableCell>
                            <TableCell className='font-bold text-2xl' align="right">Numéros</TableCell>
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
                        </TableRow>
                    </TableFoot>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
}



