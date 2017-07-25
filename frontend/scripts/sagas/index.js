import { fork } from 'redux-saga/effects'
import { createTransactionsSaga,
  getWatchesFromImportObject
} from 'transactions-redux-request'
const { authorizationSaga,
  formSaga,
  transactionsSaga,
  userSaga
} = require('transactions-interface-state').default

export default function * rootSaga () {
  yield [
    ...getWatchesFromImportObject(authorizationSaga),
    ...getWatchesFromImportObject(formSaga),
    ...getWatchesFromImportObject(transactionsSaga),
    ...getWatchesFromImportObject(userSaga)
  ].map(fork)
}
