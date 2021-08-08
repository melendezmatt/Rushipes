import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createOneRecipe, refreshRecipes } from '../../store/recipes'
import { GiCookingPot } from 'react-icons/gi'
import './NewRecipe.css'

const NewRecipeForm = () => {
    const loggedInUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [recipeName, setRecipeName] = useState('')
    let [recipeImage, setRecipeImage] = useState('')
    const [about, setAbout] = useState('')
    const [instructions, setInstructions] = useState('')
    const [cookTime, setCookTime] = useState(5)
    const [prepTime, setPrepTime] = useState(5)
    const [servings, setServings] = useState(1)
    const [type, setType] = useState(1)

    const onSubmit = async(e) => {
        e.preventDefault();
        if (recipeImage.length === 0) {
            recipeImage = 'recipe_image_url.jpeg'
        }
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
                let errs = Object.values(data.errors)
                setErrors(errs)
            } else{
                dispatch(refreshRecipes())
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
        setType(Number(e.target.value));
    };

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(refreshRecipes())
        history.push(`/users/${loggedInUser?.id}/recipes`)
    }

    return (
        <div className='form-container'>
            <div className='form-inner-container'>
            <h2> <GiCookingPot /> New Recipe <GiCookingPot /> </h2>
            <form onSubmit={onSubmit} className='actual-form'>
                <div className="form-errors">
                {errors && errors.map(error => (
                    <li key={error}>{error}</li>
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
                    placeholder='Recipe Name'
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
                    placeholder='Tell us about your recipe!'
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
                    rows='5'
                    cols='40'
                    placeholder='How do you make your recipe?'
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
                    placeholder='Show us your recipe!'
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
                    min='5'
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
                    min='5'
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
                    min='1'
                    ></input>
                </div>
            </div>
            <div className="form-question">
                <div className="form-question-label">
                    <label>Type</label>
                </div>
                <div>
                    <label htmlFor='meal'>Meal</label>
                    <input type='radio'
                        id='meal'
                        onChange={updateType}
                        checked={type === 1 || type === "1" ? true : false}
                        value="1" ></input>
                    <label htmlFor='snack' >Snack</label>
                    <input type='radio'
                        onChange={updateType}
                        checked={type === 2 || type === "2" ? true : false}
                        id='snack'
                        value="2" ></input>
                    <label htmlFor='dessert'>Dessert</label>
                    <input type='radio'
                        onChange={updateType}
                        id='dessert'
                        checked={type === 3 || type === "3" ? true : false}
                        value="3"></input>
                </div >
            </div>
            <button type='submit'> New Recipe!</button>
            <button type='click' onClick={handleCancel}> Cancel </button>
            </form>
            </div>
        </div>
    )
}

export default NewRecipeForm;
