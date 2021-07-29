import { useHistory } from "react-router-dom"

const EditPantryButton = ({id, pantryId}) => {
    const history = useHistory()
    const editPantry = async (e) => {
        e.preventDefault()
        history.push(`/users/${id}/pantry/${pantryId}/edit-pantry`)
    }
    return <button type="button" onClick={editPantry}> Edit Pantry </button>
}

export default EditPantryButton;
