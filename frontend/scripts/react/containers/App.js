import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearch } from 'transactions-interface-state'
import { Header,
  Information,
  Modal,
  Navigation
} from 'transactions-interface-web'
import { Tutorial } from 'transactions-tooltip-web'

import { IS_UNDER_CONSTRUCTION } from '../../utils/config'
import { menuLinks } from '../../utils/links'

class App extends Component {
  componentWillMount () {
    const { search,
      setSearch,
    } = this.props
    setSearch(search)
  }
  componentWillReceiveProps (nextProps) {
    const { search,
      setSearch
    } = this.props
    const nextSearchString = nextProps.search
    if (nextSearchString !== search) {
      setSearch(nextSearchString)
    }
  }
  render () {
    const { children,
      setup: { siteName }
    } = this.props
    return (
      <div className='app'>
        {
          !IS_UNDER_CONSTRUCTION && (
            <Header menuLinks={menuLinks}
              siteName={siteName} />
          )
        }
        {!IS_UNDER_CONSTRUCTION && <Information />}
        {children}
        {!IS_UNDER_CONSTRUCTION && <Modal />}
        {!IS_UNDER_CONSTRUCTION && <Tutorial />}
      </div>
    )
  }
}

function mapStateToProps({ router: { location: { pathname,
  search
} } }) {
  // NOTE: pathname needs to be passes to make the App
  // responsive to pathname changes
  // (lighter solution than using withRouter)
  return { pathname,
    search
  }
}
export default connect(mapStateToProps, { setSearch })(App)
