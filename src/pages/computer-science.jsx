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
import Ctabe from '../components/c-table';

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

export default function ComputerScience({ clubData }) {
    return (
        <Ctabe />
    );
}



