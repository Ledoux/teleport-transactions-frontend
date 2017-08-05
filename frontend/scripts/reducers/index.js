import { routerReducer as router } from 'react-router-redux'
import { combineReducers } from 'redux'
const { flash,
  form,
  information,
  modal,
  navigation,
  user
} = require('transactions-interface-state').default

import authorization from './authorization'
import formalizer from './formalizer'
import normalizer from './normalizer'
import reselector from './reselector'
import { cardViewer,
  itemViewer
} from './viewers'

const rootReducer = combineReducers({ authorization,
  cardViewer,
  flash,
  form,
  formalizer,
  information,
  modal,
  itemViewer,
  navigation,
  normalizer,
  reselector,
  router,
  user
})

export default rootReducer
