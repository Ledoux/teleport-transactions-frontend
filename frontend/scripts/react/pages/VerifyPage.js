import React, { Component } from 'react'
import { connect } from 'react-redux'
const { apiFetch,
  setActiveUser
} = require('transactions-interface-state')
import { Button,
  Icon
} from 'transactions-interface-web'

import { SIGN_PATH } from '../../utils/apis'

class VerifyPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      success: false
    }
  }
  componentDidMount () {
    const { setActiveUser } = this.props
    const code = (window.location.search.match(/code=([^&]*)/) || [null, null])[1]
    if (!code) {
      return
    }
    this.setState({
      code,
      loading: true
    })
    apiFetch(`${SIGN_PATH}/activate-account`, {
      method: 'post',
      body: JSON.stringify({code})
    })
    .then(({error, user}) => {
      if (error) {
        this.setState({
          loading: false,
          error
        })
        return
      }
      this.setState({
        loading: false,
        success: true
      })
      setActiveUser()
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: err
      })
    })
  }
  render () {
    const {code, error, loading, success} = this.state
    return (<main className='page activate-account-page main'>
      <h1 className='activate-account-page__title h2 center'>
        Account Status
      </h1>
      {(!code || error) &&
        <div className='mb2'>Something went wrong. Please try opening your activation link from your email again, and otherwise, please contact us.</div>
      }
      {loading &&
        <div className='mb2'>activating...</div>
      }
      {!error && success &&
        <div>
          <div className='mb2'>
            Account activated!
          </div>
          <div>
            <Icon className='activate-account-page__icon' icon='user' />
          </div>
          <div>
            <Button
              className='button button--primary'
              onClick={() => {
                // actually we cannot here use href='/'
                // because we need to do a full refresh in order to
                // reset the __INITIAL_STATE__ with the good user
                window.location.assign('/')
              }}
            >
              Go to your home
            </Button>
          </div>
        </div>
      }
  </main>)}
}

export default connect(null, {setActiveUser})(VerifyPage)
