import { ChadrackImage } from "../images/index"

export default function AvatarComponent() {
    return (
        <>
            <img src={ChadrackImage} alt="Photo de profil" class="rounded-full w-12 h-12 border-4 border-white shadow-lg" />
        </>
    )
}

