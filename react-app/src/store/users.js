const SET_USERS = 'users/SET_USERS';
const GET_USER = 'users/GET_USER';
const GET_PANTRIES = 'users/GET_PANTRIES'
const GET_SINGLE = 'users/GET_SINGLE'
const REMOVE_SINGLE = 'users/REMOVE_SINGLE'

const setUsers = (users) => ({
    type:SET_USERS,
    users
})

const setOneUser = (user) => ({
    type: GET_USER,
    user,
});

const setPantries = (pantries) => ({
    type: GET_PANTRIES,
    pantries
})

const setOnePantry = (pantry) => ({
    type: GET_SINGLE,
    pantry,
});

const deleteOnePantry = (pantry) => ({
    type: REMOVE_SINGLE,
    pantry,
})

export const getUsers = () => async(dispatch) => {
    const res = await fetch('/api/users');

    if (res.ok) {
        const users = await res.json()
        dispatch(setUsers(users))
    }
}

export const getOneUser = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}`);

    if (res.ok) {
      const user = await res.json();
      dispatch(setOneUser(user));
    }
};

export const getAllUserPantries = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/all-pantries`)
    if (res.ok) {
        const pantries = await res.json()
        dispatch(setPantries(pantries))
        return pantries
    }
}

export const getOnePantry = (id, pantryId) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/pantries/${pantryId}`);

    if (res.ok) {
      const pantry = await res.json();
      dispatch(setOnePantry(pantry));
      return pantry
    }
};

export const createOnePantry = (payload) => async (dispatch) => {
    const res = await fetch(`/api/users/${Number(payload.user_id)}/new-pantry`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        const pantry = await res.json()
        dispatch(setOnePantry(pantry))
        return pantry
    }
}

export const editOnePantry = (payload, pantryId) => async (dispatch) => {
    const res = await fetch(`/api/users/${Number(payload.user_id)}/pantry/${pantryId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });

    if (res.ok) {
      const pantry = await res.json();
      dispatch(setOnePantry(pantry));
      return pantry
    }
};

export const removeOnePantry = (id, pantryId) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/pantry/${pantryId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        const pantry = await res.json()
        dispatch(deleteOnePantry(pantry))
        return pantry;
    }
}

const initialState = {}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            const allUsers = {};
            action.users.forEach((user) => {
                allUsers[user.id] = user;
            }
            );
            return {
                ...state,
                ...allUsers
            };
        case GET_USER:
            return {
                ...state,
                [action.user.id] : action.user
            };
        case GET_PANTRIES:
            return {
                ...state,
                pantries: action.pantries
            }
        case GET_SINGLE:
            return {
                ...state,
                pantry: action.pantry
            }
        case REMOVE_SINGLE:
            const newState = { ...state };
            delete newState[action.pantry];
            return newState;
        default:
            return state
    }
}

export default usersReducer;
