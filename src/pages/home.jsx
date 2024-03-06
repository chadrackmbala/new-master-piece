import Actus from "../components/actus";

export default function Home() {
    return (
        <>
            <h2 className="relative top-5 mb-10 text-center text-4xl">Actualités</h2>
            <div className="flex flex-wrap gap-20 justify-center">
                <Actus />
            </div>
        </>
    )
}