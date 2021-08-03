import { useHistory } from "react-router-dom"
import './EditRecipeButton.css'
const EditRecipeButton = ({id, recipeId}) => {
    const history = useHistory()
    const editRecipe = async (e) => {
        e.preventDefault()
        history.push(`/users/${id}/recipe/${Number(recipeId)}/edit-recipe`)
    }
    return (<div className='edit-button'>
                <button type="button" onClick={editRecipe}> Edit </button>
            </div>)

}

export default EditRecipeButton;
