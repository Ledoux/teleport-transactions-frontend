import { routerReducer as router } from 'react-router-redux'
import { combineReducers } from 'redux'
const { authorization,
  createCardViewer,
  createItemViewer,
  flash,
  information,
  modal,
  navigation,
  user
} = require('transactions-interface-state').default

import normalizer from './normalizer'
import reselector from './reselector'
import { ItemComponentsByComponentsName } from '../react/views'

const rootReducer = combineReducers({ authorization,
  flash,
  information,
  itemViewer: createItemViewer(ItemComponentsByComponentsName),
  modal,
  navigation,
  normalizer,
  reselector,
  router,
  user
})

export default rootReducer
