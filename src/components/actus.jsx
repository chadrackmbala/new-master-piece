export default function Actus({ actu }) {
    return (
        <>
            <div className="w - [80 %] ml - [20 %] h - screen">
                <img src={actu.image} alt="" />
                <h2>{actu.title}</h2>
                <p>{actu.description}</p>
            </div>
        </>
    )
} 