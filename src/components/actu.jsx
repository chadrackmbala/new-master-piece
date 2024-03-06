export default function Actu({ actu }) {

    return (
        <>
            {/* <div className="m-10 relative top-5 flex flex-wrap gap-20 justify-center">
                <div className="w-[80 %] ml-[20 %] h-screen">
                    
                </div>
            </div> */}
            <div className="cursor-pointer">
                <img src={actu.image} alt="" className="w-96 rounded mb-5 shadow-xl" />
                <h2 className="font-bold mb-5">{actu.title}</h2>
                <div className="w-96">
                    <p>{actu.description}</p>
                </div>
            </div>
        </>
    )
}

{/* <div className="m-10 relative top-5 flex flex-wrap gap-20 justify-center">
    <div className="w - [80 %] ml - [20 %] h - screen">
        <div className="flex">
            <div className="cursor-pointer">
                <img src={actu.image} alt="" className="w-96 rounded mb-5 shadow-xl" />
                <h2 className="font-bold mb-5">{actu.title}</h2>
                <div className="w-96">
                    <p>{actu.description}</p>
                </div>
            </div>
        </div>
    </div>
</div> */}