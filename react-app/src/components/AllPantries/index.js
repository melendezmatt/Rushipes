import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllUserPantries} from '../../store/pantries';
import AllPantriesContainer from '../AllPantriesContainer';
import './AllPantries.css'

const AllPantries = () => {
    const history = useHistory();
    const loggedInUser = useSelector((state) => state.session.user)
    const id = loggedInUser?.id
    const dispatch = useDispatch();

    const currPantries = useSelector((state) => {
        return state.pantries
    })

    useEffect(() => {
        dispatch(getAllUserPantries(id))
    }, [dispatch, id])

    const newPantry = async(e) => {
        history.push(`/users/${loggedInUser.id}/new-pantry`)
    }

    return (
        <div className='outer-container'>
            <div className='outer-header'>
                <div className='outer-title'>
                    <h1>{loggedInUser.username}'s Pantries</h1>
                </div>
                <div className='add-button'>
                    <button onClick={newPantry}> Add Pantry</button>
                </div>
            </div>
            <AllPantriesContainer allPantries={Object.values(currPantries)}/>
        </div>

    )
}

export default AllPantries;
