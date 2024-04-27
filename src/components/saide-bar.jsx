import { NavLink } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import SaideBarClubs from "./said-bar-clubs";
import CloseIcon from '@mui/icons-material/Close';
import BasicButton from './button';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SaideBar() {

    const [isToggleClubs, setIsToggleClubs] = useState(false);

    function onToggle() {
        setIsToggleClubs(preview => !preview);
    }

    return (
        <>
            <ul>
                <li className="flex rounded mt-3 w-[230px] h-11 link">
                    <NavLink className="nav-link flex items-center" to="/home">
                        <HomeIcon className="mr-2" /> Home
                    </NavLink>
                </li>
                <li className="flex rounded w-[230px] h-11 link">
                    <NavLink className="nav-link flex items-center" to="/profile">
                        <PersonIcon className="mr-2" /> Profile
                    </NavLink>
                </li>
                <li className="flex rounded w-[230px] h-11 link">
                    <NavLink className="nav-link flex items-center" to="/events">
                        <CelebrationIcon className="mr-2" /> Evenements
                    </NavLink>
                </li>
                <li className="flex rounded w-[230px] h-11  link">
                    <div className="nav-link flex items-center">
                        <Diversity3Icon className="mr-2" /> Clubs <button onClick={onToggle}>
                            {
                                isToggleClubs ? <ExpandMoreIcon className="ml-16" /> : <ChevronRightIcon className="ml-16" />
                            }
                        </button>
                    </div>

                </li>
                {
                    isToggleClubs ? <SaideBarClubs /> : null
                }

                <li className="flex rounded w-[230px] h-11  link">
                    <NavLink className="nav-link flex items-center" to="/administration">
                        <ManageAccountsIcon className="mr-2" /> Administration
                    </NavLink>
                </li>
            </ul>
            <div>
                <Button variant="contained" className="bg-[#319484] w-56" style={{ textTransform: 'capitalize' }}>Se deconnecter
                    <LogoutIcon className="ml-2" />
                </Button>
            </div>
        </>

    )
}