import { combineReducers } from "redux";

export default combineReducers({
    //We create this dummy reducer to remove the error in browser.
    dummyReducer: () => 'I will be removed later when we create actual reducers'
});