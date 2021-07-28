import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const AllPantriesContainer = ({allPantries}) => {
    const loggedInUser = useSelector(state => state.session.user)

    return (
        <div>
            {allPantries.map(pantry => (
                <div>
                    <NavLink to={`/users/${loggedInUser.id}/pantry/${pantry?.id}`}>
                            <p>{pantry?.pantry_name}</p>
                        </NavLink>
                </div>
            ))}
        </div>
    )
}

export default AllPantriesContainer;
