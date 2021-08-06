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

    let mealType;
    if (Number(currRecipe?.type) === 1) mealType='Meal'
    if (Number(currRecipe?.type) === 2) mealType='Snack'
    if (Number(currRecipe?.type) === 3) mealType='Dessert'

    return (
        <div className='single-container'>
            <div className='single-inner'>
                <div className='single-info'>
                    <h1> {currRecipe?.recipe_name}</h1>
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
                        alt='recipeImg'
                    />
                </div>
            </div>
            <div className='info-container'>
                <p> Cook Time: {currRecipe?.cook_time} mins</p>
                <p> Prep Time: {currRecipe?.prep_time} mins</p>
                <p> Total Time: {currRecipe?.cook_time + currRecipe?.prep_time} mins</p>
                <p> Servings: {currRecipe?.servings} servings</p>
                <p> Type: {mealType}</p>
            </div>
            <div className='combined-container'>
                <div className='instructions-container'>
                    <div className='instructions-inner-container'>
                        <h2> Instructions</h2>
                        <h3> {currRecipe?.instructions}</h3>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default SingleRecipe;
