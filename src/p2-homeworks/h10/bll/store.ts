import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore, applyMiddleware} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {RequestReducer} from "../../hw13/RequesReducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: RequestReducer
});

const store = createStore(reducers , applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
