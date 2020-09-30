import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

//  Reducer
const initialStocksState = {
    stocks: [],
    loading: false,
    error: false,
}

const stocks_reducer = (state = initialStocksState, action) => {
    switch (action.type) {
        case actionTypes.STOCKS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case actionTypes.STOCKS_LOADED:
            return {
                ...state,
                stocks: action.payload
            }
        case actionTypes.STOCKS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    stocks: stocks_reducer,
});

export default rootReducer;