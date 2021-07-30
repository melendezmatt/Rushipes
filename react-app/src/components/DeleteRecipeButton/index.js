import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeOneRecipe } from "../../store/recipes";
import "./DeleteRecipeButton.css"


const DeleteRecipeButton = ({id, recipeId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const deleteRecipe = async (e) => {
        e.preventDefault()
        await dispatch(removeOneRecipe(id, recipeId))
        history.push(`/users/${id}/recipes`)
    }
    return (
        <div className='delete-button'>
            <button type="button" onClick={deleteRecipe}> Delete </button>
        </div>
    )
}

export default DeleteRecipeButton;
