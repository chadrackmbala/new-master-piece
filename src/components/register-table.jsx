import axios from "axios";
import { ChadrackImage, LebronJames } from "../images/index"
import BasicButton from "./button"
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Students from "./students";
import useRegisterStore from "../context/register-context";

export default function RegisterTable() {

    const { studentsRegister, getRegistersData } = useRegisterStore();

    useEffect(() => {
        getRegistersData();
    }, []);
console.log(studentsRegister);
    // const registerArray = [...studentsRegister].reverse();

    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                {/* <h1 className="text-[#319484] relative top-5 text-center text-4xl">Registre</h1> */}
                <div className="flex justify-center mt-10">
                    <div className="w-[950px] min-h-screen bg-white rounded">
                        <div className="bg-gray-100 min-h-screen">
                            <div className="flex justify-center mt-10">
                                <div className="flex flex-wrap justify-center gap-10 w-[950px] min-h-screen bg-white rounded">
                                    {studentsRegister.map((registerData, index) => (
                                        <Students registerData={registerData} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}