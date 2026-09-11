import react from 'react'
import ICard from './ICard'
import pic from '../images/Prashant.png'

function ICardGallery() {
    return (
        <div>
            <ICard name="Salman khan" roll="2400321530137" branch="CSE-AIML" section="C" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkSLOkvs3aLaD4VHQPYyrgGYudy9gvyHI7XObefwGvA&s=10'></ICard>
            <ICard name="Prashant Gaur" roll="2400321530147" branch="CSE-AIML" section="C" image={pic}></ICard>
        </div>
    )
}
export default ICardGallery;