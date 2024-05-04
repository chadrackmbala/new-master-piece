import { ChadrackImage } from "../images/index"

export default function Profile() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="relative mt-5">
                    <img src={ChadrackImage} alt="Photo de profil" class="rounded-full w-48 h-48 border-4 border-white shadow-lg" />
                    <div className="absolute bottom-1 right-7 w-5 h-5 border-2 border-white rounded-full bg-green-500"></div>
                </div>
                <h2 className="text-4xl">Chadrack Mbala Mukawa</h2>

                <div className="bg-white  rounded-lg shadow-lg mt-8 p-4 w-3/4">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        Université
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Faculté
                                    </th>
                                    <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                        Département
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Promotion
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-20 py-3">
                                        Adresse
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        Université de Kinshasa
                                    </th>
                                    <td class="px-6 py-4">
                                        Sciences
                                    </td>
                                    <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                        Mat-Info
                                    </td>
                                    <td class="px-6 py-4">
                                        L2
                                    </td>
                                    <td class="px-6 py-4">
                                        chadrackmbala20@gmail.com
                                    </td>

                                    <td class="px-6 py-4">
                                        N° : 38, Av : ACP, Q : Sans fil, C : Masina
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <button className="mt-4 bg-[#319484] text-white px-4 py-2 rounded-md hover:bg-blue-600">Éditer le profil</button> */}
                </div>
            </div>
        </>

    )
}