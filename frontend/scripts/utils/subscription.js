const { createSubscription } = require('transactions-interface-state').default

import { getFilteredElements } from '../reducers/reselector'
import modes from './modes'

function hasJoinedModeAccess (state, collectionName) {
  return getFilteredElements(state, 'WITH_UNIQ_USER_JOIN', collectionName).length > 0
}
const subscription = createSubscription({ hasJoinedModeAccess,
  modes
})

export default subscription
