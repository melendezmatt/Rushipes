import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllUserPantries, getOnePantry } from '../../store/pantries';

const SinglePantry = () => {
    const loggedInUser = useSelector(state => state.session.user)
    const id = loggedInUser?.id
    const dispatch = useDispatch()
    const { pantryId } = useParams()
    console.log(pantryId)
    const currPantry = useSelector((state) => {
        return state.pantries[pantryId]
    })

    useEffect(() => {
        dispatch(getAllUserPantries(id))
    }, [dispatch, id])

    return (
        <div>
            <h1> {currPantry?.pantry_name}</h1>
            <h2> {currPantry?.location}</h2>
            <h3> {currPantry?.about}</h3>
        </div>

    )
}

export default SinglePantry;
