import * as Actions from '../../actions/index';
export const vrImages = (state = {
    readyState: Actions.IMAGES_FETCH_INVALID,
    result: null
}, action) => {
    switch (action.type) {
        case Actions.IMAGES_FETCHED:
            return {
                ...state,
                readyState: Actions.IMAGES_FETCHED,
                result: action.payload
            };
        default:
            return state;
    }
};
export const background = (state = "", action) => {
    switch (action.type) {
        case Actions.CHANGE_BACKGROUND:
            return action.payload;
        default:
            return state;
    }
};