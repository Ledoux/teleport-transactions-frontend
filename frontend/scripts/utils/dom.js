const { assignInFlash,
  setUser
} = require('transactions-interface-state').default

export function onDomReady (store) {
  const { user, flash } = store.getState()
  if (user) {
    store.dispatch(setUser(user))
  }
  if (flash) {
    store.dispatch(assignInFlash(flash))
  }
}
