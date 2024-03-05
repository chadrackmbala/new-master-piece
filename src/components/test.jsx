import SaideBar from "./saide-bar";

export default function Test() {
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
                <div className="w-[80%] ml-[20%] h-screen bg-[#F5F5F5]">

                    <div className="flex justify-center relative top-10">
                        <div className="relative flex justify-center items-center rounded shadow-xl w-5/6 h-96 bg-[url('images/bg-image.jpg')] bg-center bg-cover overflow-hidden">
                            <h1 className="text-white z-10 text-5xl">Centre Culturel Loango</h1>
                            <div className="absolute top-0 w-full h-full bg-black opacity-75"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//bg-[#1976D2]