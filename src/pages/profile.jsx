import { ChadrackImage } from "../images/index"

export default function Profile() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="relative mt-0">
                    <img src={ChadrackImage} alt="Photo de profil" class="rounded-full w-48 h-48 border-4 border-white shadow-lg" />
                    <div className="absolute bottom-1 right-7 w-5 h-5 border-2 border-white rounded-full bg-green-500"></div>
                </div>
                <h2 className="text-4xl">Chadrack Mbala</h2>

                <div className="bg-white  rounded-lg shadow-lg mt-8 p-4 w-3/4">
                    <div className="flex justify-around">
                        <div>
                            <h2 className="text-xl font-semibold">Université</h2>
                            <p className="">UNIKIN</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Faculté</h2>
                            <p className="">Sciences</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Département </h2>
                            <p className="">Mathématique et Informatique</p>
                        </div>
                    </div>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Éditer le profil</button>
                </div>
            </div>
        </>

    )
}