import react from 'react'
import ICard from './ICard'
import pic from '../images/Prashant.png'

function ICardGallery() {
    const student=[
        {
        roll:'2400321530137',
        name:'Prashant gaur',
        branch:'CSE-AIML',
        section:'C',
        image:pic
    },
            {
        roll:'2400321530123',
        name:'nikhil ',
        branch:'CSE-AIML',
        section:'C',
        image:pic
    },
            {
        roll:'2400321530147',
        name:'kuldeep',
        branch:'CSE-AIML',
        section:'C',
        image:pic
    },
            {
        roll:'2400321530137',
        name:'Prashant gaur',
        branch:'CSE-AIML',
        section:'C',
        image:pic
    },
    
]
    return (
        <div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around',border:'5px solid red',height:'auto'}}>
            {student.map((ele) => (
                <ICard key={ele} {...ele} />
            ))}
            {/* <ICard name="cat" roll="2400321530137" branch="CSE-AIML" section="C" image='https://cdn.britannica.com/36/234736-050-4AC5B6D5/Scottish-fold-cat.jpg'></ICard>
            <ICard name="Dog" roll="2400321530147" branch="CSE-AIML" section="C" image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNq0KV-_JxhxwRW5q7mIAC8JY4fjKiGcmauhW79TdadQ&s=10'></ICard> */}
        
        </div>
    )
}
export default ICardGallery;