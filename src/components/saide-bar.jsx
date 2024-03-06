import { NavLink } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import SaideBarClubs from "./said-bar-clubs";

export default function SaideBar() {

    const [isToggleClubs, setisToggleClubs] = useState(false);

    function onToggle() {
        setisToggleClubs(preview => !preview);
    }

    return (
        <ul>
            <li className="flex rounded mt-6 w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link " to="/home">
                    <HomeIcon className="mr-8" /> Home
                </NavLink>
            </li>
            <li className="flex rounded w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link" to="/profile">
                    <PersonIcon className="mr-8" /> Profile
                </NavLink>
            </li>
            <li className="flex rounded w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link" to="/events">
                    <CelebrationIcon className="mr-8" /> Evenements
                </NavLink>
            </li>
            <li className="flex rounded w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link" to="/clubs">
                    <Diversity3Icon className="mr-8" /> Clubs <button onClick={onToggle}><AddIcon className="ml-16" /></button>
                </NavLink>
                
            </li>
            {
                    isToggleClubs ? <SaideBarClubs /> : null
                }

            <li className="flex rounded w-[230px] h-11 hover:bg-slate-100">
                <NavLink className="nav-link" to="/settings">
                    <SettingsIcon className="mr-8" /> Paramètres
                </NavLink>
            </li>
        </ul>
    )
}