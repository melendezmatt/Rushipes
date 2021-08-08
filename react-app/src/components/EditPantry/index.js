import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams  } from 'react-router-dom';
import { getAllUserPantries, editOnePantry, refreshPantries} from '../../store/pantries'
import './EditPantry.css'
import { RiFridgeFill } from 'react-icons/ri'

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
    let [pantryImage, setPantryImage] = useState(currPantry?.pantry_image_url)
    const [location, setLocation] = useState(currPantry?.location)
    const [about, setAbout] = useState(currPantry?.about)

    useEffect(() => {
        dispatch(getAllUserPantries(id))
    }, [dispatch, id])

    const onSubmit = async(e) => {
        e.preventDefault();
        if (pantryImage.length === 0) {
            pantryImage = 'pantry_image_url.jpeg'
        }
        const formInfo = {
            user_id: id,
            pantry_name: pantryName,
            pantry_image_url: pantryImage,
            location: location,
            about: about
        }

        const data = await dispatch(editOnePantry(formInfo, pantryId))
        if (data) {
            if(data.errors){
                let errs = Object.values(data.errors)
                setErrors(errs)
            } else{
                dispatch(refreshPantries())
                history.push(`/users/${loggedInUser.id}/pantries`)
            }
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(refreshPantries())
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

    const updateAbout = (e) => {
        setAbout(e.target.value);
    };

    return (
        <div className='form-container'>
            <div className='form-inner-container'>
            <h2> <RiFridgeFill /> Edit Pantry <RiFridgeFill /> </h2>
            <form onSubmit={onSubmit} className='actual-form'>
            <div className="form-errors">
            {errors && errors.map(error => (
                <li key={error}>{error}</li>
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
                placeholder="Pantry Name"
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
                    rows='5'
                    cols='40'
                    placeholder='Tell us about your pantry!'
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
                placeholder="Where is your pantry?"
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
                placeholder='Show us your pantry!'
                ></input>
            </div>
        </div>
        <button type='submit'> Edit Pantry!</button>
        <button type='click' onClick={handleCancel}> Cancel </button>
        </form>
        </div>
    </div>
    )
}

export default EditPantryForm;
