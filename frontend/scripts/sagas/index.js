import { fork } from 'redux-saga/effects'
import { createTokenizer,
  watchRequestAuthorizationApiAction,
  watchMergeNormalizerGetSignAction,
  watchSetUser
} from 'transactions-authorization-state'
import { watchFormActions } from 'transactions-cms-state'
import { watchAllActions,
  watchTransactionFails
} from 'transactions-interface-state'
import { createTransactionsSaga } from 'transactions-redux-request'

function createRootSaga (config = {}) {
  // unpack
  const { setup: { IS_PRODUCTION },
    store
  } = config
  const guestMode = store.getState().authorization.guestMode
  if (IS_PRODUCTION) {
    config.logger = null
  }
  // tokenizer
  const tokenizer = createTokenizer({ guestMode })
  // transactions
  const { watchRequestTransactions } = createTransactionsSaga(Object.assign({ tokenizer },
    config))
  // root
  function * rootSaga () {
    yield [
      // watchAllActions,
      watchFormActions,
      watchMergeNormalizerGetSignAction,
      watchRequestAuthorizationApiAction,
      watchRequestTransactions,
      watchTransactionFails,
      watchSetUser
    ].map(fork)
  }
  // return
  return rootSaga
}

export default createRootSaga
