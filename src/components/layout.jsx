import { Outlet } from "react-router-dom";
import SaideBar from "./saide-bar";
import AccountMenu from "./account-menu";

export default function Layout() {

    return (
        <div className="transition-all duration-500">
            <div>
                <div className="h-16 relative flex z-40">

                    <div className="saide-bar fixed top-0 left-0  pl-2.5 pl-2right-0 h-screen w-[20%] border-solid border-[#E0E0E0] z-40">
                        <SaideBar />
                    </div>
                    <div className="fixed top-0 right-0 bg-[#fff] h-16 w-[80%] flex items-center justify-between pl-10 shadow-xl">
                        <h2 className="text-[#319484] font-medium text-2xl">Loango App</h2>
                        <div>
                            <AccountMenu />
                        </div>
                    </div>0D99FF
                </div>

            </div>

            <div className="relative h-screen">
                <div className="w-[80%] ml-[20%] h-screen ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

//bg-[#1976D2]