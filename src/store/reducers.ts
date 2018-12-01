import { combineReducers } from "redux";

import MyFoodReducer from 'page.my-food-page.reducer'
import MainPageReducer from 'page.main-page.reducer'

export default combineReducers({
    MyFoodReducer,
    MainPageReducer
})