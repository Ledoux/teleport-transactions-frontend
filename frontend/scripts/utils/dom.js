const { assignInFlash,
  setUser
} = require('transactions-interface-state').default

import { requestTransactions } from '../reducers/transactions'
const { modes } = require('./subscription').default

export function onDomReady (store) {
  const { user, flash } = store.getState()
  if (user) {
    store.dispatch(setUser(user, { modes, requestTransactions }))
  }
  if (flash) {
    store.dispatch(assignInFlash(flash))
  }
}
