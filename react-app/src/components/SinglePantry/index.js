import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOnePantry } from '../../store/pantries';

const SinglePantry = () => {
    const loggedInUser = useSelector(state => state.session.user)
    const id = loggedInUser?.id
    const dispatch = useDispatch()
    const { pantryId } = useParams()
    const currPantry = useSelector((state) => {
        return state.users.pantry
    })

    useEffect(() => {
        dispatch(getOnePantry(id, pantryId))
    }, [dispatch, id, pantryId])

    return (
        <div>
            <h1> {currPantry?.pantry_name}</h1>
            <h2> {currPantry?.location}</h2>
        </div>

    )
}

export default SinglePantry;
