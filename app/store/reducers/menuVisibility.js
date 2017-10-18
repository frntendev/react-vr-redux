/**
 * Created by s.aliakbari on 8/8/2017.
 */
import * as Actions from '../../actions/index';
export const menuVisibility = (state = false, action) => {
    switch (action.type) {
        case Actions.MENU_VISIBILIY:
            return !state;
        default:
            return state;
    }
};