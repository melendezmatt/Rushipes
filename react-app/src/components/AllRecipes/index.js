import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllUserRecipes } from '../../store/recipes';
import AllRecipesContainer from '../AllRecipesContainer';
import './AllRecipes.css'

const AllRecipes = () => {
    const history = useHistory();
    const loggedInUser = useSelector((state) => state.session.user)
    const id = loggedInUser?.id
    const dispatch = useDispatch();

    const currRecipes = useSelector((state) => {
        return state.recipes
    })

    useEffect(() => {
        dispatch(getAllUserRecipes(id))
    }, [dispatch, id])

    const newRecipe = async(e) => {
        history.push(`/users/${loggedInUser.id}/new-recipe`)
    }

    return (
        <div className='outer-container'>
            <div className='outer-header'>
                <div className='outer-title'>
                    <h1>{loggedInUser.username}'s Recipes</h1>
                </div>
                <div className='add-button'>
                    <button onClick={newRecipe}> New Recipe</button>
                </div>
            </div>
            <AllRecipesContainer allRecipes={Object.values(currRecipes)}/>
        </div>

    )
}

export default AllRecipes;
