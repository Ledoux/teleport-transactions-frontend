import { requestTransactions as _requestTransactions } from 'transactions-redux-request'

import { SIGN_PATH,
  TRANSACTIONS_PATH
} from '../utils/apis'
import subscription from '../utils/subscription'

export function requestTransactions (method, options, config = {}) {
  const extra = Object.assign({}, config.extra, {
    signPath: SIGN_PATH
  })
  return _requestTransactions(method, options, Object.assign({}, config, {
    authorization: 'jwt',
    extra,
    subscription,
    url: TRANSACTIONS_PATH
  }))
}
