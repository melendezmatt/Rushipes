import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserPantries} from '../../store/users';
import { NavLink } from 'react-router-dom';




const AllPantries = () => {
    const loggedInUser = useSelector((state) => state.session.user)
    const id = loggedInUser?.id
    const dispatch = useDispatch();

    const currPantries = useSelector((state) => {
        return state.users.pantries
    })
    console.log(currPantries?.pantries)
    useEffect(() => {
        dispatch(getAllUserPantries(id))
    }, [dispatch, id])
    return (
        <div>
            <h1>hello</h1>
            {(currPantries?.pantries.map(pantry => (
                <div>
                    <p>{pantry.pantry_name}</p>
                    <p>{pantry.id}</p>
                    <p>{pantry.location}</p>
                </div>
            )))}
        </div>


    )
}

export default AllPantries;
