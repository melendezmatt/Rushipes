import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeOnePantry } from "../../store/users";


const DeletePantryButton = ({id, pantryId}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const deletePantry = async (e) => {
        e.preventDefault()
        await dispatch(removeOnePantry(id, pantryId))
        history.push(`/users/${id}/pantries`)
    }
    return <button type="button" onClick={deletePantry}> Delete Pantry </button>
}

export default DeletePantryButton;
