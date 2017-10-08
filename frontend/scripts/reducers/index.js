import { routerReducer as router } from 'react-router-redux'
import { combineReducers } from 'redux'
import { createBlockers,
  flash,
  information,
  loading,
  modal,
  navigation,
  search
} from 'transactions-interface-state'
import { tour,
  user
} from 'transactions-user-state'
import { explorations,
  form,
  pipeline,
  slugid
} from 'transactions-cms-state'
import { createNormalizer,
  createRequest
} from 'transactions-redux-request'

import authorization from './authorization'
import cardViewer from './cardViewer'
import dashboardViewer from './dashboardViewer'
import modalViewer from './modalViewer'
import itemViewer from './itemViewer'
import reselector from './reselector'
import submit from './submit'
import tutorial from './tutorial'

export function createRootReducer (config = {}) {
  const { history,
    setup: { description }
  } = config
  const blockers = createBlockers(history)
  const normalizer = createNormalizer(description)
  const request = createRequest()
  const rootReducer = combineReducers({ authorization,
    blockers,
    cardViewer,
    dashboardViewer,
    explorations,
    flash,
    form,
    information,
    itemViewer,
    loading,
    modal,
    modalViewer,
    navigation,
    normalizer,
    pipeline,
    request,
    reselector,
    router,
    search,
    slugid,
    submit,
    tour,
    tutorial,
    user
  })
  return rootReducer
}

export default createRootReducer
