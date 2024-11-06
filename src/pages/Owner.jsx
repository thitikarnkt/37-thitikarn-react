import Elmo from '../assets/elmo.png';

const PageOwner = {
    name: 'Elmo',
    firstName: 'Thitkarn',
    genMate: 'Group G',
    number: '37',
    bio: 'Hi! Elmos name is Elmo! Elmo loves to play and learn with friends! Elmo is one of the most beloved characters from Sesame Street, known for his bright red fur, orange nose, and a high-pitched, giggly voice. Hes curious, enthusiastic, and always ready to explore new things.'
};

function Name() {
    return (
        <h1 className="text-4xl font-bold text-center my-8">
            {PageOwner.name} - 
            {PageOwner.firstName} - 
            {PageOwner.genMate} - 
            {PageOwner.number}
        </h1>
    )
}

function Image() {
    return (
        <img
            src={Elmo}
            alt={PageOwner.name}
            className='max-h-96 mb-6'
        />
    )
}

function Bio() {
    return (
        <p className="max-w-2xl mx-auto">
            {PageOwner.bio}
        </p>
    )
}

export default function Owner() {
    return (
        <div className="max-w-max mx-auto">
            <Name/>
            <Image/>
            <p className="text-xl font-bold max-w-max mx-auto mb-3">Short Biograpgy :</p>
            <Bio/>
        </div>
    )
}