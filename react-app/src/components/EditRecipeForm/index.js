import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { editOneRecipe } from '../../store/recipes'

const EditRecipeForm = () => {
    const loggedInUser = useSelector(state => state.session.user);
    const id = loggedInUser?.id
    const { recipeId } = useParams()
    const currRecipe = useSelector((state) => {
        return state.recipes[recipeId]
    })
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [recipeName, setRecipeName] = useState(currRecipe?.recipe_name)
    const [recipeImage, setRecipeImage] = useState(currRecipe?.recipe_image_url)
    const [about, setAbout] = useState(currRecipe?.about)
    const [instructions, setInstructions] = useState(currRecipe?.instructions)
    const [cookTime, setCookTime] = useState(currRecipe?.cook_time)
    const [prepTime, setPrepTime] = useState(currRecipe?.prep_time)
    const [servings, setServings] = useState(currRecipe?.servings)
    const [type, setType] = useState(currRecipe?.type)

    const onSubmit = async(e) => {
        e.preventDefault();

        const formInfo = {
            user_id: id,
            recipe_name: recipeName,
            recipe_image_url: recipeImage,
            about: about,
            instructions: instructions,
            cook_time: cookTime,
            prep_time: prepTime,
            servings: servings,
            type: type
        }

        const data = await dispatch(editOneRecipe(formInfo))
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
        <button type='submit'> Edit Recipe!</button>
        </form>
    )
}

export default EditRecipeForm;
