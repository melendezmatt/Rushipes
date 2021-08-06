import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllUserPantries} from '../../store/pantries';
import DeletePantryButton from '../DeletePantryButton';
import EditPantryButton from '../EditPantryButton'
import './SinglePantry.css'

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
        <div className='single-container'>
            <div className='single-inner'>
                <div className='single-info'>
                    <h1> {currPantry?.pantry_name}</h1>
                    <h3> {currPantry?.location}</h3>
                    <p> {currPantry?.about}</p>
                    <div className='single-buttons'>
                        <EditPantryButton id={id} pantryId={Number(pantryId)}/>
                        <DeletePantryButton id={id} pantryId={Number(pantryId)}/>
                    </div>
                </div>
                <div className='single-image'>
                    <img
                        style={{ width: "270px", height: "270px", objectFit: "cover", margin:'10px'}}
                        src={
                            currPantry?.pantry_image_url === 'pantry_image_url.jpeg'
                                ? 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg'
                                : currPantry?.pantry_image_url
                            }
                        alt='pantryImg'
                    />
                </div>
            </div>

            <div className='ingredients-container'>
                <h2> Ingredients</h2>
            </div>
        </div>

    )
}

export default SinglePantry;
