import React, { Component } from 'react'
import { Header,
  Navigation } from 'transactions-interface-web'

import { IS_UNDER_CONSTRUCTION } from '../../utils/config'

class App extends Component {
  render () {
    const { children,
      pathname
    } = this.props
    return (
      <div className='app'>
        {!IS_UNDER_CONSTRUCTION && <Header pathname={pathname} />}
        {!IS_UNDER_CONSTRUCTION && <Navigation />}
        {children}
      </div>
    )
  }
}

export default App
