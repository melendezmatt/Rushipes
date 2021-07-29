import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeOnePantry } from "../../store/pantries";
import "./DeletePantryButton.css"


const DeletePantryButton = ({id, pantryId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const deletePantry = async (e) => {
        e.preventDefault()
        await dispatch(removeOnePantry(id, pantryId))
        history.push(`/users/${id}/pantries`)
    }
    return (
        <div className='delete-button'>
            <button type="button" onClick={deletePantry}> Delete </button>
        </div>
    )
}

export default DeletePantryButton;
