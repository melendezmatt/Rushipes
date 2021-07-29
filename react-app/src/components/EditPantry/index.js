import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams  } from 'react-router-dom';
import { getAllUserPantries, editOnePantry } from '../../store/pantries'

const EditPantryForm = () => {
    const loggedInUser = useSelector(state => state.session.user);
    const id = loggedInUser?.id
    const { pantryId } = useParams()
    const currPantry = useSelector((state) => {
        return state.pantries[pantryId]
    })
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [pantryName, setPantryName] = useState(currPantry?.pantry_name)
    const [pantryImage, setPantryImage] = useState(currPantry?.pantry_image_url)
    const [location, setLocation] = useState(currPantry?.location)

    console.log(id)
    console.log(pantryId)
    useEffect(() => {
        dispatch(getAllUserPantries(id))
    }, [dispatch, id])

    const onSubmit = async(e) => {
        e.preventDefault();

        const formInfo = {
            user_id: id,
            pantry_name: pantryName,
            pantry_image_url: pantryImage,
            location: location
        }

        const data = await dispatch(editOnePantry(formInfo, pantryId))
        if (data) {
            if(data.errors){
                let errs = Object.keys(data.errors)
                setErrors(errs)
            } else{
                history.push(`/users/${loggedInUser.id}/pantries`)
            }
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        history.push(`/users/${id}/pantries`)
    }

    const updatePantryName = (e) => {
        setPantryName(e.target.value);
    };

    const updatePantryImage = (e) => {
    setPantryImage(e.target.value);
    };

    const updateLocation = (e) => {
    setLocation(e.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-errors">
            {errors && errors.map(error => (
                <li key={error}>{error + " field is required"}</li>
            ))}
            </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Pantry Name</label>
            </div>
            <div className="form-input">
                <input
                type='text'
                name='pantryName'
                onChange={updatePantryName}
                value={pantryName}
                required={true}
                ></input>
            </div>
        </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Pantry Image</label>
            </div>
            <div className="form-input">
                <input
                type='text'
                name='pantryImage'
                onChange={updatePantryImage}
                value={pantryImage}
                required={true}
                ></input>
            </div>
        </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Location</label>
            </div>
            <div className="form-input">
                <input
                type='text'
                name='location'
                onChange={updateLocation}
                value={location}
                required={true}
                ></input>
            </div>
        </div>
        <button type='submit'> Edit Pantry!</button>
        <button type='click' onClick={handleCancel}> Cancel </button>
        </form>
    )
}

export default EditPantryForm;
