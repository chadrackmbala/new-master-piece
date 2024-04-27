import Form from "../components/form";
import LockPersonIcon from '@mui/icons-material/LockPerson';

export default function Login({ onLoginSubmit }) {
    return (
        <div className="flex h-screen justify-center items-center bg-[#6b4a4a50]">
            <div className="w-4/6 p-5 h-[500px] bg-[#F3F4F6] shadow-2xl rounded-md flex justify-between overflow-hidden">
                <div className="w-[45%] bg-[#F3F4F6] flex justify-center items-center">
                    <Form onLoginSubmit={onLoginSubmit} />
                </div>
                <div className="w-[0.2%]  bg-[#319484]" ></div>
                <div className="w-[45%] h-full  bg-no-repeat  bg-center">
                    <LockPersonIcon className='w-[300px] h-[400px] text-[#319484]' />
                </div>
            </div>
        </div>
    )
}
