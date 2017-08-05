import React from 'react'
import { Redirect } from 'react-router'
const { getLocationSearch } = require('transactions-interface-state').default

import render from './render'
import { getFilteredElements } from '../reducers/reselector'
import { requestTransactions } from '../reducers/transactions'
import { SIGN_PATH,
  TRANSACTIONS_PATH
} from '../utils/apis'
import links from '../utils/links'
import { redirectToHome,
  redirectToHomeWithWarning
} from '../utils/redirection'

function getProps (router) {
  const { history,
    location: { pathname, search },
    match: { params }
  } = router
  const locationSearch = getLocationSearch(search)
  return Object.assign({ getFilteredElements,
    history,
    pathname,
    requestTransactions
  }, params, locationSearch)
}

export const routes = [
  // ROOT HOME REDIRECT
  {
    exact: true,
    path: '/',
    render: () => <Redirect to={redirectToHome()} />
  }
].concat(links.map(path => {
  return {
    exact: true,
    path,
    render: router => render(router, { getAppProps: getProps,
      getPageProps: getProps})
  }
})).concat([
  // APIS HOME WARNING REDIRECTS
  { path: `${SIGN_PATH}/*`, render: ({ match }) =>
    <Redirect to={redirectToHomeWithWarning(match)} /> },
  { path: `${TRANSACTIONS_PATH}/*`, render: ({ match }) =>
    <Redirect to={redirectToHomeWithWarning(match)} /> }
])
