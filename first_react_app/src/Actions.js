import * as ActionTypes from './ActionTypes'
import AppDispatch from 'AppDispatch'

export default increment = conterCaption => {
    AppDispatch.dispatch({
        type: ActionTypes.INCREMENT,
        counterCaption
    })
}

export default decrement = conterCaption => {
    AppDispatch.dispatch({
        type: ActionTypes.DECREMENT,
        counterCaption
    })
}