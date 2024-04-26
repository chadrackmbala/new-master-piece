import { MessiImg, Cardinal, MatchEvent } from "../images/index"

export default function Profile() {
    return (
        <>
            <div className="flex justify-between mr-10 mt-10">
                <div>
                </div>
                <div>
                    <img class="rounded-full h-24 w-24" src={MessiImg} alt="" />
                </div>
            </div>
            <div >
                <h2 className="ml-10 text-4xl">Lionel Messi</h2>
            </div>
            <div className="ml-10 mt-10">
            Lionel Messi, parfois surnommé Leo Messi, <br />
            né le 24 juin 1987 à Rosario en Argentine, <br />
            est un footballeur international argentin <br />
            jouant au poste d'attaquant à l’Inter Miami <br />
            CF en MLS. Octuple vainqueur du Ballon d'or, <br />
            un record, il est considéré comme l'un des meilleurs <br />
            joueurs de football toutes générations confondues.
            </div>
            {/* <h2 className="text-[#319484] relative top-5 text-center text-4xl">Profile</h2> */}
        </>

    )
}