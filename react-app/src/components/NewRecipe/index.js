import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createOneRecipe } from '../../store/recipes'

const NewRecipeForm = () => {
    const loggedInUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [recipeName, setRecipeName] = useState('')
    const [recipeImage, setRecipeImage] = useState('')
    const [about, setAbout] = useState('')
    const [instructions, setInstructions] = useState('')
    const [cookTime, setCookTime] = useState(0)
    const [prepTime, setPrepTime] = useState(0)
    const [servings, setServings] = useState(0)
    const [type, setType] = useState(0)

    const onSubmit = async(e) => {
        e.preventDefault();

        const formInfo = {
            user_id: loggedInUser?.id,
            recipe_name: recipeName,
            recipe_image_url: recipeImage,
            about: about,
            instructions: instructions,
            cook_time: cookTime,
            prep_time: prepTime,
            servings: servings,
            type: type
        }

        const data = await dispatch(createOneRecipe(formInfo))
        if (data) {
            if(data.errors){
                let errs = Object.keys(data.errors)
                setErrors(errs)
            } else{
                history.push(`/users/${loggedInUser.id}/recipes`)
            }
        }
    }

    const updateRecipeName = (e) => {
        setRecipeName(e.target.value);
    };

    const updateRecipeImage = (e) => {
        setRecipeImage(e.target.value);
    };

    const updateAbout = (e) => {
    setAbout(e.target.value);
    };

    const updateInstructions = (e) => {
        setInstructions(e.target.value);
    };

    const updateServings = (e) => {
        setServings(e.target.value);
    };

    const updateCookTime = (e) => {
    setCookTime(e.target.value);
    };

    const updatePrepTime = (e) => {
        setPrepTime(e.target.value);
    };

    const updateType = (e) => {
        setType(e.target.value);
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
                <label>Recipe Name</label>
            </div>
            <div className="form-input">
                <input
                type='text'
                name='recipeName'
                onChange={updateRecipeName}
                value={recipeName}
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
                ></textarea>
            </div>
        </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Instructions</label>
            </div>
            <div className="form-text-area">
                <textarea
                name='instructions'
                onChange={updateInstructions}
                value={instructions}
                required={true}
                ></textarea>
            </div>
        </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Recipe Image</label>
            </div>
            <div className="form-input">
                <input
                type='text'
                name='recipeImage'
                onChange={updateRecipeImage}
                value={recipeImage}
                required={true}
                ></input>
            </div>
        </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Prep Time</label>
            </div>
            <div className="form-input">
                <input
                type='number'
                name='prepTime'
                onChange={updatePrepTime}
                value={prepTime}
                required={true}
                ></input>
            </div>
        </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Cook Time</label>
            </div>
            <div className="form-input">
                <input
                type='number'
                name='cookTime'
                onChange={updateCookTime}
                value={cookTime}
                required={true}
                ></input>
            </div>
        </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Servings</label>
            </div>
            <div className="form-input">
                <input
                type='number'
                name='servings'
                onChange={updateServings}
                value={servings}
                required={true}
                ></input>
            </div>
        </div>
        <div className="form-question">
            <div className="form-question-label">
                <label>Type</label>
            </div>
            <div className="form-input">
                <select
                type='integer'
                name='select'
                onChange={updateType}
                value={type}
                required={true}
                >
                <option value='0'>Meal</option>
                <option value='1'> Snack</option>
                <option value='2'>Dessert</option>
                </select>
            </div>
        </div>
        <button type='submit'> New Recipe!</button>
        </form>
    )
}

export default NewRecipeForm;
