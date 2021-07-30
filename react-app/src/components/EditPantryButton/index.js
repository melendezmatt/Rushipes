import { useHistory } from "react-router-dom"
import './EditPantryButton.css'
const EditPantryButton = ({id, pantryId}) => {
    const history = useHistory()
    const editPantry = async (e) => {
        e.preventDefault()
        history.push(`/users/${id}/pantry/${Number(pantryId)}/edit-pantry`)
    }
    return (<div className='edit-button'>
                <button type="button" onClick={editPantry}> Edit </button>
            </div>)

}

export default EditPantryButton;
