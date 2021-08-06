const GET_INGREDIENTS = 'ingredients/GET_INGREDIENTS'
const GET_SINGLE = 'ingredients/GET_SINGLE'
const REMOVE_SINGLE = 'ingredients/REMOVE_SINGLE'

const setIngredients = (ingredients) => ({
    type: GET_INGREDIENTS,
    ingredients
})

const setOneIngredient = (ingredient) => ({
    type: GET_SINGLE,
    ingredient,
});

const deleteOneIngredient = (ingredient) => ({
    type: REMOVE_SINGLE,
    ingredient,
})

export const getAllPantryIngredients = (id, pantryId) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/pantry/${pantryId}/all-ingredients`)
    if (res.ok) {
        const ingredients = await res.json()
        dispatch(setIngredients(ingredients))
        return ingredients
    }
}

export const getOneIngredient = (id, pantryId, ingredientId) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/pantry/${pantryId}/ingredient/${ingredientId}`);

    if (res.ok) {
      const ingredient = await res.json();
      dispatch(setOneIngredient(ingredient));
      return ingredient
    }
};

export const createOneIngredient = (id, payload) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/pantry/${Number(payload.pantry_id)}/new-ingredient`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const ingredient = await res.json()
        dispatch(setOneIngredient(ingredient))
        return ingredient
    }
}

export const editOneIngredient = (id, payload, ingredientId) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/pantry/${Number(payload.pantry_id)}/ingredient/${ingredientId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
      const ingredient = await res.json();
      dispatch(setOneIngredient(ingredient));
      return ingredient
    }
};

export const removeOneIngredient = (id, pantryId, ingredientId) => async (dispatch) => {
    console.log(id, ingredientId)
    const res = await fetch(`/api/users/${id}/pantry/${pantryId}/ingredient/${ingredientId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const ingredient = await res.json()
        dispatch(deleteOneIngredient(ingredient))
        return ingredient;
    }
}

const initialState = {}

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            const allIngredients = {};
            action.ingredients.ingredients.forEach((ingredient) => {
                allIngredients[ingredient.id] = ingredient;
            }
            );
            return {
                ...state,
                ...allIngredients
            }
        case GET_SINGLE:
            return {
                ...state,
                [action.ingredient.id] : action.ingredient
            }
        case REMOVE_SINGLE:
            const newState = { ...state };
            delete newState[action.ingredient.id];
            return newState;
        default:
            return state
    }
}

export default ingredientsReducer;
