import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createOnePantry } from '../../store/users'

const NewPantryForm = () => {
    const loggedInUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [pantryName, setPantryName] = useState('')
    const [pantryImage, setPantryImage] = useState('')
    const [location, setLocation] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault();

        const formInfo = {
            user_id: loggedInUser?.id,
            pantry_name: pantryName,
            pantry_image_url: pantryImage,
            location: location
        }

        const data = await dispatch(createOnePantry(formInfo))
        if (data) {
            if(data.errors){
                let errs = Object.keys(data.errors)
                setErrors(errs)
            } else{
                history.push(`/users/${loggedInUser.id}/pantries`)
            }
        }
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
        <button type='submit'> New Pantry!</button>
        </form>
    )
}

export default NewPantryForm;
