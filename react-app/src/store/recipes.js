const GET_RECIPES = 'recipes/GET_RECIPES'
const GET_SINGLE = 'recipes/GET_SINGLE'
const REMOVE_SINGLE = 'recipes/REMOVE_SINGLE'

const setRecipes = (recipes) => ({
    type: GET_RECIPES,
    recipes
})

const setOneRecipe = (recipe) => ({
    type: GET_SINGLE,
    recipe,
});

const deleteOneRecipe = (recipe) => ({
    type: REMOVE_SINGLE,
    recipe,
})

export const getAllUserRecipes = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/all-recipes`)
    if (res.ok) {
        const recipes = await res.json()
        dispatch(setRecipes(recipes))
        return recipes
    }
}

export const getOneRecipe = (id, recipeId) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/recipes/${recipeId}`);

    if (res.ok) {
      const recipe = await res.json();
      dispatch(setOneRecipe(recipe));
      return recipe
    }
};

export const createOneRecipe = (payload) => async (dispatch) => {
    const res = await fetch(`/api/users/${Number(payload.user_id)}/new-recipe`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const recipe = await res.json()
        dispatch(setOneRecipe(recipe))
        return recipe
    }
}

export const editOneRecipe = (payload, recipeId) => async (dispatch) => {
    const res = await fetch(`/api/users/${Number(payload.user_id)}/recipe/${recipeId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
      const recipe = await res.json();
      dispatch(setOneRecipe(recipe));
      return recipe
    }
};

export const removeOneRecipe = (id, recipeId) => async (dispatch) => {
    console.log(id, recipeId)
    const res = await fetch(`/api/users/${id}/recipe/${recipeId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const recipe = await res.json()
        dispatch(deleteOneRecipe(recipe))
        return recipe;
    }
}

const initialState = {}

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            const allrecipes = {};
            action.recipes.recipes.forEach((recipe) => {
                allrecipes[recipe.id] = recipe;
            }
            );
            return {
                ...state,
                ...allrecipes
            }
        case GET_SINGLE:
            return {
                ...state,
                [action.recipe.id] : action.recipe
            }
        case REMOVE_SINGLE:
            const newState = { ...state };
            delete newState[action.recipe.id];
            return newState;
        default:
            return state
    }
}

export default recipesReducer;
