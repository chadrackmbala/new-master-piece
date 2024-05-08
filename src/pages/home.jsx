import { useStore } from "zustand";
import News from "../components/news";
import { Background } from "../images/index"
import useUserStore from "../context/user-context";


export default function Home() {

    const { email } = useUserStore()

    return (
        <div className="bg-gray-100">
            <h2 className="text-[#319484] relative top-5 mb-10 text-center text-4xl">Actualités</h2>
            <div className="flex flex-wrap gap-20 justify-center">
                {/* <Actus /> */}
                <News />
                {/* <img src={Background} alt="" className="w-[700px] h-[200px]:" /> */}
            </div>
        </div>
    )
}