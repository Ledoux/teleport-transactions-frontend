import React, { Component } from 'react'
import { connect } from 'react-redux'
const { closeInformation,
  closeNavigation,
  getAuthorizedLinks,
  getIsEditOrNewNotBlock,
  getLocationSearch,
  getLocationSearchString,
  getTransactionsProps,
  setAuthorizationLinks,
  setAuthorizationSelectedMode,
  showModal
} = require('transactions-interface-state').default
import { Header,
  Information,
  Modal,
  Navigation,
  Warning
} from 'transactions-interface-web'
import { Helpers } from 'transactions-tooltip-help'

import { requestTransactions } from '../../reducers/transactions'
import { getFilteredElements } from '../../reducers/reselector'
import { IS_UNDER_CONSTRUCTION } from '../../utils/config'
import helpersByCollectionName from '../../utils/helpers'
import { menuLinks } from '../../utils/links'
const { guestMode } = require('../../utils/subscription').default

class App extends Component {
  constructor () {
    super ()
    this.handleBeforeNavigation = this._handleBeforeNavigation.bind(this)
    this.handleNavigation = this._handleNavigation.bind(this)
  }
  componentDidMount () {
    this.handleNavigation()
    this._unlisteners = [
      this.props.history.block(this.handleBeforeNavigation),
    ]
  }
  componentDidUpdate (prevProps) {
    this.handleNavigation()
  }
  componentWillUnmount () {
    (this._unlisteners || []).forEach(unlistener => {
      if (typeof unlistener === 'function') {
        unlistener()
      }
    })
  }
  _handleBeforeNavigation (location) {
    const { BlockComponent,
      closeNavigation,
      closeInformation,
      history,
      isNavigationActive,
      isInformationActive,
      modes,
      pathname,
      selectedMode,
      setAuthorizationSelectedMode,
      showModal,
      slug
    } = this.props
    const search = getLocationSearch(window.location.search)
    const nextSearch = getLocationSearch(location.search)
    // special check for website when we are in new or edit mode
    const isNotBlock = getIsEditOrNewNotBlock(Object.assign({isNew: slug === 'new'},
      search), nextSearch)
    if (isNotBlock === false) {
      nextSearch.isForcingLocationChange = 'true'
      showModal(<BlockComponent
        history={history}
        icon='warning'
        subtext='You are still editing some content'
        text='Are you sure you want to leave this page ?'
        nextLocation={{
          pathname: location.pathname,
          search: getLocationSearchString(nextSearch),
          state: location.state
        }}
      />, {
        beforeCloseModal: () => history.push('/home')
      })
      return isNotBlock
    }
    // check things when we change the page
    if (location.pathname !== pathname) {
      setTimeout(() => {
        // Keep default behavior of restoring scroll position when user:
        // - clicked back button
        // - clicked on a link that programmatically calls `history.goBack()`
        // - manually changed the URL in the address bar (here we might want
        // to scroll to top, but we can't differentiate it from the others)
        if (location.action === 'POP') {
          return
        }
        // In all other cases, scroll to top
        window.scrollTo(0, 0)
        // maybe need to close menu
        isNavigationActive && closeNavigation()
        isInformationActive && closeInformation()
      })
    } else if (Object.keys(nextSearch).length === 0) {
      // it means we did nothing so let's keep that way
      return false
    }
    // special mode navigation
    if (nextSearch.selectedHomeName) {
      if (search.selectedHomeName !== nextSearch.selectedHomeName) {
        isNavigationActive && closeNavigation()
        isInformationActive && closeInformation()
        const nextSelectedMode = modes.find(mode =>
          mode.homeName === nextSearch.selectedHomeName)
        if (nextSelectedMode) {
          setAuthorizationSelectedMode(nextSelectedMode)
        }
      }
    }
  }
  _handleNavigation (prevProps = {}) {
    const { history,
      isClearHistory,
      isForcingLocationChange,
      modes,
      setAuthorizationLinks
    } = this.props
    // look for isClearHistory
    if (isClearHistory) {
      history.push('/home')
      return
    }
    // look for isForcingLocationChange
    if (isForcingLocationChange) {
      history.push({
        search: window.location.search
          .replace('isForcingLocationChange=true', '')
      })
      return
    }
    // set initial guest mode
    if (!modes) {
      const initialModes = (guestMode && [guestMode]) || []
      setAuthorizationLinks(getAuthorizedLinks(initialModes), initialModes)
    }
  }
  render () {
    const { children,
      helpersCollectionName,
      history,
      pathname
    } = this.props
    const transactionsProps = getTransactionsProps(this.props)
    return (
      <div className='app'>
        {
          !IS_UNDER_CONSTRUCTION && (
            <Header
              menuLinks={menuLinks}
              pathname={pathname}
            />
          )
        }
        {!IS_UNDER_CONSTRUCTION && (
          <Information {...transactionsProps} />
        )}
        {!IS_UNDER_CONSTRUCTION && <Navigation />}
        {children}
        {!IS_UNDER_CONSTRUCTION && <Modal />}
        {
          !IS_UNDER_CONSTRUCTION && helpersCollectionName && (
          <Helpers
            collectionName={helpersCollectionName}
            helpersByCollectionName={helpersByCollectionName}
            pathname={pathname}
            stepIndex={helperStepIndex}
          />)
        }
      </div>
    )
  }
}

App.defaultProps = { BlockComponent: Warning,
  pathname: typeof window !== 'undefined' && window.location.pathname
}

function mapStateToProps ({
  authorization: {
    modes,
    selectedMode
  },
  information,
  navigation
}) {
  return { modes,
    isInformationActive: information.isActive,
    isNavigationActive: navigation.isActive,
    selectedMode
  }
}
export default connect(mapStateToProps, { closeInformation,
  closeNavigation,
  setAuthorizationLinks,
  setAuthorizationSelectedMode,
  showModal
})(App)
