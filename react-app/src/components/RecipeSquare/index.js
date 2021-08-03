import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DeleteRecipeButton from '../DeleteRecipeButton';
import EditRecipeButton from '../EditRecipeButton';
import './RecipeSquare.css';

const RecipeSquare = ({ recipe }) => {
    const loggedInUser = useSelector(state => state.session.user)
    const id = loggedInUser?.id
    return (
        <div className='recipe-square'>
            <div className='recipe-image'>
                <img
                    style={{ width: "200px", height: "200px", objectFit: "cover", margin:'10px', borderRadius:'50%'}}
                    src={
                        recipe?.recipe_image_url === 'recipe_image_url.jpeg'
                            ? 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg'
                            : recipe?.recipe_image_url
                        }
                />
            </div>
            <div className='recipe-content'>
                <div className='recipe-info'>
                    <div className='recipeLink'>
                        <NavLink to={`/users/${id}/recipe/${recipe.id}`}>
                            {recipe.recipe_name}
                        </NavLink>
                    </div>
                    <div className='recipe-servings'>
                        Servings: {recipe.servings}
                    </div>
                    <div class='recipe-full-time'>
                        Total Time: {recipe.prep_time + recipe.cook_time} mins
                    </div>
                </div>
                <div className='recipe-buttons'>
                    <EditRecipeButton id={id} recipeId={recipe.id}/>
                    <DeleteRecipeButton id={id} recipeId={recipe.id}/>
                </div>


            </div>
        </div>
    )
}

export default RecipeSquare;
