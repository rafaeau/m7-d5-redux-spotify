import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        
        case 'DEL_FROM_FAVORITES':
            return {
                ...state,
                favorites: state.favorites.filter((song, id) => id !== action.payload)
            }
        default:
            return state
    }
}

export default mainReducer