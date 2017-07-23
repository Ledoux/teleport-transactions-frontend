import { routerReducer as router } from 'react-router-redux'
import { combineReducers } from 'redux'
import { information } from 'transactions-interface-state'

const rootReducer = combineReducers({
  information,
  router
})

export default rootReducer
