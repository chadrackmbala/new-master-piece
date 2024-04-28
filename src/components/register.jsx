import { ChadrackImage, LebronJames } from "../images/index"
import BasicButton from "./button"
import { Link, useNavigate } from 'react-router-dom';


export default function register() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                {/* <h1 className="text-[#319484] relative top-5 text-center text-4xl">Registre</h1> */}
                <div className="flex justify-center mt-10">
                    <div className="w-[950px] min-h-screen bg-white rounded">
                        <div className="flex justify-center items-center mt-10 mb-10 gap-20">
                            <div className="flex items-center flex-col flex-wrap">
                                <div className="absolute">
                                    <img src={ChadrackImage} alt="" className="rounded-full w-40 h-40 border-4 border-white shadow-lg" />
                                </div>
                                <div className="w-[400px] flex flex-col items-center bg-gray-100 rounded p-5 mt-20">
                                    <div className="mt-20">
                                        <h2 className="text-base font-medium text-[#319484] text-center mb-10">Chadrack Mbala</h2>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Université : </h3>
                                            <p className="text-sm ml-2">Université de Kinshasa</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Faculté : </h3>
                                            <p className="text-sm ml-2">Sciences</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Départément : </h3>
                                            <p className="text-sm ml-2">Mat-Info</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Promotion : </h3>
                                            <p className="text-sm ml-2">L2</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Email : </h3>
                                            <p className="text-sm ml-2">chadrackmbala20@gmail.com</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Adresse : </h3>
                                            <p className="text-sm ml-2">N° : 38, Av : ACP, Q : Sans fil, C : Masina</p>
                                        </div>
                                    </div>
                                    <div className='flex pl-10 mt-10'>
                                        <Link className='text-[#319484] hover:underline underline-offset-1 hover:-translate-y-1 hover:scale-110 duration-300'>Editer les informations</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center flex-col flex-wrap">
                                <div className="absolute">
                                    <img src={LebronJames} alt="" className="rounded-full w-40 h-40 border-4 border-white shadow-lg" />
                                </div>
                                <div className="w-[400px] flex flex-col items-center bg-gray-100 rounded p-5 mt-20">
                                    <div className="mt-20">
                                        <h2 className="text-base font-medium text-[#319484] text-center mb-10">Lebron James</h2>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Université : </h3>
                                            <p className="text-sm ml-2">Université de Kinshasa</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Faculté : </h3>
                                            <p className="text-sm ml-2">Sciences</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Départément : </h3>
                                            <p className="text-sm ml-2">Mat-Info</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Promotion : </h3>
                                            <p className="text-sm ml-2">L2</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Email : </h3>
                                            <p className="text-sm ml-2">chadrackmbala20@gmail.com</p>
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="text-base font-medium">Adresse : </h3>
                                            <p className="text-sm ml-2">N° : 38, Av : ACP, Q : Sans fil, C : Masina</p>
                                        </div>
                                    </div>
                                    <div className='flex pl-10 mt-10'>
                                        <Link className='text-[#319484] hover:underline underline-offset-1 hover:-translate-y-1 hover:scale-110 duration-300'>Editer les informations</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}