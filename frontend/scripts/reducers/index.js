import { routerReducer as router } from 'react-router-redux'
import { combineReducers } from 'redux'
const { authorization,
  flash,
  information,
  modal,
  user
} = require('transactions-interface-state').default

import normalizer from './normalizer'
import reselector from './reselector'

const rootReducer = combineReducers({ authorization,
  flash,
  information,
  modal,
  normalizer,
  reselector,
  router,
  user
})

export default rootReducer
