import { NavLink } from "react-router-dom";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import GavelIcon from '@mui/icons-material/Gavel';
import ComputerIcon from '@mui/icons-material/Computer';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function SaideBarClubs() {
    return (
        <ul className="ml-3">
            <li className="flex rounded w-[200px] h-11 link">
                <NavLink className="nav-link flex items-center" to="/clubs/medecine">
                    <VaccinesIcon className="mr-2" /> Club de Médecine 
                </NavLink>
            </li>
            <li className="flex rounded w-[200px] h-11 link club-link">
                <NavLink className="nav-link flex items-center" to="/clubs/law">
                    <GavelIcon className="mr-2" /> Club de Droit
                </NavLink>
            </li>
            <li className="flex rounded w-[200px] h-11 link club-link">
                <NavLink className="nav-link flex items-center" to="/clubs/computer-science">
                    <ComputerIcon className="mr-2" /> Club d'Informatique
                </NavLink>
            </li>
            <li className="flex rounded w-[200px] h-11 link club-link">
                <NavLink className="nav-link flex items-center" to="/clubs/economy">
                    <BarChartIcon className="mr-2" /> Club d'Economie
                </NavLink>
            </li>
        </ul>
    )
}