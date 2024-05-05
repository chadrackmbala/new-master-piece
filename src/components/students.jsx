
import { ChadrackImage, LebronJames } from "../images/index"
import { Link, useNavigate } from 'react-router-dom';
export default function Students({ registerData }) {

    console.log(registerData);
    return (
        <>
            <div className="flex items-center flex-col flex-wrap">
                <div className="absolute">
                    <img src={ChadrackImage} alt="" className="rounded-full w-40 h-40 border-4 border-white shadow-lg" />
                </div>
                <div className="w-[400px] flex flex-col items-center bg-gray-100 rounded p-5 mt-20">
                    <div className="mt-20">
                        <h2 className="text-base font-medium text-[#319484] text-center mb-10">{registerData.prenom} {registerData.nom} {registerData.postnom}</h2>
                        <div className="flex items-center">
                            <h3 className="text-base font-medium">Université : </h3>
                            <p className="text-sm ml-2">{registerData.universite}</p>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-base font-medium">Faculté : </h3>
                            <p className="text-sm ml-2">{registerData.faculte}</p>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-base font-medium">Départément : </h3>
                            <p className="text-sm ml-2">{registerData.departement}</p>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-base font-medium">Promotion : </h3>
                            <p className="text-sm ml-2">{registerData.promotion}</p>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-base font-medium">Email : </h3>
                            <p className="text-sm ml-2">{registerData.email}</p>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-base font-medium">Adresse : </h3>
                            <p className="text-sm ml-2">{registerData.adresse}</p>
                        </div>
                    </div>
                    <div className='flex pl-10 mt-10'>
                        <Link to="/update-data" className='text-[#319484] hover:underline underline-offset-1 hover:-translate-y-1 hover:scale-110 duration-300'>Editer les informations</Link>
                    </div>
                </div>
            </div>
        </>
    )
}