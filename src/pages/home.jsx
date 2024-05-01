import ActuDeux from "../components/news";

export default function Home() {
    return (
        <div className="bg-gray-100">
            <h2 className="text-[#319484] relative top-5 mb-10 text-center text-4xl">Actualités</h2>
            <div className="flex flex-wrap gap-20 justify-center">
                {/* <Actus /> */}
                <ActuDeux />
            </div>
        </div>
    )
}