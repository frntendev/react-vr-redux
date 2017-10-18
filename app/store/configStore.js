/**
 * Created by S.Aliakbari on 7/30/2017.
 */
import { createStore,applyMiddleware } from "redux";
import {reducers} from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
export const store = applyMiddleware(logger,thunk)(createStore)(
    reducers
);
