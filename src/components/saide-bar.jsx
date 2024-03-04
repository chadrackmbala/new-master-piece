import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SettingsIcon from '@mui/icons-material/Settings';

export default function SaideBar() {
    return (
        <ul>
            <li className="mb-8 mt-6 ml-5">
                <NavLink className="nav-link " to="/profile">
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
                <NavLink className="nav-link" to="/profile">
                    <SettingsIcon className="mr-8" /> Paramètres
                </NavLink>
            </li>
        </ul>
    )
}