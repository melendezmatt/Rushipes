import { useSelector } from 'react-redux';
import PantrySquare from '../PantrySquare'
const AllPantriesContainer = ({allPantries}) => {
    const loggedInUser = useSelector(state => state.session.user)

    return (
        <div>
            {allPantries?.map(pantry => (
                <PantrySquare pantry={pantry} key={pantry.id}/>
            ))}
        </div>
    )
}

export default AllPantriesContainer;
