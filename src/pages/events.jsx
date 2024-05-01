import ActuDeux from "../components/news"

export default function Events() {
    return(
        <div className="bg-gray-100 min-h-screen">
            {/* <h2 className="text-[#319484] relative top-5 mb-10 text-center text-4xl">Evenements</h2> */}
            <div className="flex flex-wrap gap-20 justify-center pt-10">
                {/* <Actus /> */}
                <ActuDeux />
            </div>
        </div>
    )
}