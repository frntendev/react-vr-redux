/**
 * Created by S.Aliakbari on 7/30/2017.
 */
import {combineReducers} from 'redux';
import {vrImages,background} from './vrImages';
import {menuVisibility} from './menuVisibility';
export const reducers = combineReducers({
    vrImages,
    menuVisibility,
    background
});
