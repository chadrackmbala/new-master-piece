import { NavLink } from "react-router-dom";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import GavelIcon from '@mui/icons-material/Gavel';
import ComputerIcon from '@mui/icons-material/Computer';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function SaideBarClubs() {
    return (
        <ul className="ml-3">
            <li className="flex rounded w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link" to="clubs/medicine">
                    <VaccinesIcon className="mr-8" /> Club de Médecine 
                </NavLink>
            </li>
            <li className="flex rounded w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link" to="clubs/law">
                    <GavelIcon className="mr-8" /> Club de Droit
                </NavLink>
            </li>
            <li className="flex rounded w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link" to="clubs/computer-science">
                    <ComputerIcon className="mr-8" /> Club d'Informatique
                </NavLink>
            </li>
            <li className="flex rounded w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link" to="clubs/economy">
                    <BarChartIcon className="mr-8" /> Club d'Economie
                </NavLink>
            </li>
        </ul>
    )
}