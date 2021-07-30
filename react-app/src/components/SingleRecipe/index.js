import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllUserRecipes} from '../../store/recipes';
import DeleteRecipeButton from '../DeleteRecipeButton';
import EditRecipeButton from '../EditRecipeButton'
import './SingleRecipe.css'

const SingleRecipe = () => {
    const loggedInUser = useSelector(state => state.session.user)
    const id = loggedInUser?.id
    const dispatch = useDispatch()
    const { recipeId } = useParams()
    const currRecipe = useSelector((state) => {
        return state.recipes[recipeId]
    })

    useEffect(() => {
        dispatch(getAllUserRecipes(id))
    }, [dispatch, id])

    return (
        <div className='single-container'>
            <div className='single-inner'>
                <div className='single-info'>
                    <h1> {currRecipe?.recipe_name}</h1>
                    <h3> {currRecipe?.location}</h3>
                    <p> {currRecipe?.about}</p>
                    <div className='single-buttons'>
                        <EditRecipeButton id={id} recipeId={Number(recipeId)}/>
                        <DeleteRecipeButton id={id} recipeId={Number(recipeId)}/>
                    </div>
                </div>
                <div className='single-image'>
                    <img
                        style={{ width: "270px", height: "270px", objectFit: "cover", margin:'10px'}}
                        src={
                            currRecipe?.recipe_image_url === 'recipe_image_url.jpeg'
                                ? 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg'
                                : currRecipe?.recipe_image_url
                            }
                    />
                </div>
            </div>

            <div className='ingredients-container'>
                <h2> Ingredients</h2>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>
                <p>here</p>

            </div>
        </div>

    )
}

export default SingleRecipe;
