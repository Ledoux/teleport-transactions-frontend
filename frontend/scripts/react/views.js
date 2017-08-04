import { ContentPage } from 'transactions-interface-web'

import AccountPage from './pages/AccountPage'
import ConstructionPage from './pages/ConstructionPage'
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import VerifyPage from './pages/VerifyPage'

import UserCard from './components/UserCard'

import UserItem from './components/UserItem'

export const PageComponentsByComponentsName = { AccountPage,
  ContentPage,
  ConstructionPage,
  HomePage,
  SigninPage,
  SignupPage,
  VerifyPage
}

export const CardComponentsByComponentsName = { UserCard }
export const ItemComponentsByComponentsName = { UserItem }
