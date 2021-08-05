import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createOnePantry } from '../../store/pantries'
import './NewPantry.css'
import { RiFridgeFill } from 'react-icons/ri'

const NewPantryForm = () => {
    const loggedInUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [pantryName, setPantryName] = useState('')
    const [pantryImage, setPantryImage] = useState('')
    const [location, setLocation] = useState('')
    const [about, setAbout] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault();

        const formInfo = {
            user_id: loggedInUser?.id,
            pantry_name: pantryName,
            pantry_image_url: pantryImage,
            location: location,
            about: about
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

    const updateAbout = (e) => {
    setAbout(e.target.value);
    };

    const handleCancel = (e) => {
        e.preventDefault()
        history.push(`/users/${loggedInUser?.id}/pantries`)
    }

    return (
        <div className='form-container'>
            <div className='form-inner-container'>
                <h2> <RiFridgeFill /> New Pantry <RiFridgeFill /> </h2>
                <form onSubmit={onSubmit}  className='actual-form'>
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
                        <label>About</label>
                    </div>
                    <div className="form-text-area">
                    <textarea
                    name='about'
                    onChange={updateAbout}
                    value={about}
                    required={true}
                    rows='5'
                    cols='40'
                    ></textarea>
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
                <button type='submit' className='submit-button'> New Pantry!</button>
                <button type='click' onClick={handleCancel}> Cancel </button>
                </form>
            </div>
        </div>
    )
}

export default NewPantryForm;
