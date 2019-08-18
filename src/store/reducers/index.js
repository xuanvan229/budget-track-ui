import { combineReducers } from 'redux'
import app from '../../pages'
import * as combine from '../../utils/config'

console.log("app", combine.combineSagas(app))
const combineReduce = combine.combineReducer(app)

const rootReducer = combineReducers({
    ...combineReduce
})

export default rootReducer