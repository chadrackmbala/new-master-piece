import Form from "../components/form";

export default function Login({ onLoginSubmit }) {
    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-t from-gray-500">
            <div className="w-3/5 h-[400px] bg-slate-100 shadow-2xl rounded-md flex justify-between overflow-hidden">

                <div className="w-[45%] flex justify-center items-center">
                    <Form onLoginSubmit={onLoginSubmit} />
                </div>
                <div className="w-[0.2%]  bg-gradient-to-t" ></div>
                <div className="w-[45%] h-full  bg-no-repeat  bg-center">
                {/* <div className="w-[45%] h-full bg-[url('./images/Logo-Minafet2.png')] bg-no-repeat  bg-center"> */}
                </div>
            </div>
        </div>
    )
}
