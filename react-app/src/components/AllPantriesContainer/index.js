import PantrySquare from '../PantrySquare'
const AllPantriesContainer = ({allPantries}) => {
    return (
        <div className='inner-container'>
            {allPantries?.map(pantry => (
                <PantrySquare pantry={pantry} key={pantry.id}/>
            ))}
        </div>
    )
}

export default AllPantriesContainer;
