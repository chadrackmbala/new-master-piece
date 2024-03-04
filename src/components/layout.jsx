import SaideBar from "./saide-bar";

export default function Layout() {
    return (
        <>
            <div className="h-16 relative flex z-40">
                <div className="bg-[#FFFFFF] w-[20%]">
                </div>
                <div className="fixed top-0 right-0 bg-[#1976D2] h-16 w-[80%] flex items-center pl-10 shadow-xl">
                    <h2 className="text-gray-50 font-medium text-2xl">Dashboard</h2>
                </div>
            </div>
            <div className="relative h-screen">
                <div className="fixed top-16 left-0 right-0 h-screen w-[20%] border-solid border-2 border-[#E0E0E0] z-40">
                    <SaideBar />
                </div>
                <div className="w-[80%] ml-[20%] h-screen bg-[#F5F5F5]"></div>
            </div>
        </>
    )
}