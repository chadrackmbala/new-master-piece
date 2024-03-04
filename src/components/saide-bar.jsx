import { NavLink } from "react-router-dom";

export default function SaideBar() {
    return (
        <ul>
            <li>
                <NavLink className="nav-link" to="/profile">
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/events">
                    Evenements
                </NavLink>
            </li>
        </ul>
    )
}