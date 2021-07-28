import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserPantries} from '../../store/users';
import AllPantriesContainer from '../AllPantriesContainer';

const AllPantries = () => {
    const loggedInUser = useSelector((state) => state.session.user)
    const id = loggedInUser?.id
    const dispatch = useDispatch();

    const currPantries = useSelector((state) => {
        return state.users.pantries
    })

    useEffect(() => {
        dispatch(getAllUserPantries(id))
    }, [dispatch, id])

    return (
        <AllPantriesContainer allPantries={currPantries?.pantries}/>
    )
}

export default AllPantries;
