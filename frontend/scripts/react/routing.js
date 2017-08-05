import React from 'react'
import { Redirect } from 'react-router'

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
    render: router => render(router, {
      getPageProps: router => {
        const { history,
          location: { pathname, search },
          match: { params }
        } = router
        return Object.assign({ getFilteredElements,
          history,
          pathname,
          requestTransactions,
          search
        }, params)
      }
    })
  }
})).concat([
  // APIS HOME WARNING REDIRECTS
  { path: `${SIGN_PATH}/*`, render: ({ match }) =>
    <Redirect to={redirectToHomeWithWarning(match)} /> },
  { path: `${TRANSACTIONS_PATH}/*`, render: ({ match }) =>
    <Redirect to={redirectToHomeWithWarning(match)} /> }
])
