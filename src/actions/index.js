import * as actionTypes from './types'
import _ from 'lodash'

const MAX_STOCKS = 9
const STOCKS_CHUNK_SIZE = 3

// Table Actions
export const stocksLoading = state => {
    return {
        type: actionTypes.STOCKS_LOADING,
        payload: state
    }
}

export const stocksLoaded = stocks => {
    const parsedStocks = _.chunk(_.slice(stocks, 0, MAX_STOCKS), STOCKS_CHUNK_SIZE)

    return {
        type: actionTypes.STOCKS_LOADED,
        payload: parsedStocks
    }
}

export const stocksError = state => {
    return {
        type: actionTypes.STOCKS_LOADED,
        payload: state
    }
}