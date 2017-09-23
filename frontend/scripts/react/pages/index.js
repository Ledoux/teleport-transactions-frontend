import { AccountPage,
  SigninPage,
  SignupPage,
  VerifyPage
} from 'transactions-user-web'
import { DashboardPage } from 'transactions-authorization-web'
import { ContentPage } from 'transactions-cms-web'

import ConstructionPage from './ConstructionPage'
import HomePage from './HomePage'

const PageComponentsByComponentsName = { AccountPage,
  ContentPage,
  ConstructionPage,
  DashboardPage,
  HomePage,
  SigninPage,
  SignupPage,
  VerifyPage
}

export const PageComponentsByName = {}
Object.keys(PageComponentsByComponentsName)
  .forEach(key => {
    const pageName = `${key[0].toLowerCase()}${key.slice(1, -4)}`
    PageComponentsByName[pageName] = PageComponentsByComponentsName[key]
  })
