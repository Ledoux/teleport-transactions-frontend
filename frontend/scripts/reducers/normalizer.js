import { createReducer } from 'transactions-redux-normalizer'

import { getFilteredElements } from './reselector'
import { appSchema } from '../utils/schemas'
import { modeJoinsByCollectionName } from '../utils/authorization'

const normalizer = createReducer({ schema: appSchema })

const getNormalizerJoinEntity = (state, collectionNames) => {
  // look first in the store state if we have the joined entity already
  const joinedEntities = getFilteredElements(state, 'WITH_UNIQ_USER_JOIN', collectionName)
}

export default normalizer
