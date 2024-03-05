import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export default function SaideBar() {
    return (
        <ul>
            <li className="mb-8 mt-6 ml-5">
                <NavLink className="nav-link " to="/">
                    <DashboardIcon className="mr-8" /> Dashboard
                </NavLink>
            </li>
            <li className="mb-8 ml-5">
                <NavLink className="nav-link" to="/profile">
                    <PersonIcon className="mr-8" /> Profile
                </NavLink>
            </li>
            <li className="mb-8 ml-5">
                <NavLink className="nav-link" to="/events">
                    <CelebrationIcon className="mr-8" /> Evenements
                </NavLink>
            </li>
            <li className="mb-8 ml-5">
                <NavLink className="nav-link" to="/clubs">
                    <Diversity3Icon className="mr-8" /> Clubs
                </NavLink>
            </li>
            <li className="mb-8 ml-5">
                <NavLink className="nav-link" to="/settings">
                    <SettingsIcon className="mr-8" /> Paramètres
                </NavLink>
            </li>
        </ul>
    )
}