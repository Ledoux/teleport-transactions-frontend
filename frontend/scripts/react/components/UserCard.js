import classnames from 'classnames'
import React, { Component } from 'react'
import { connect } from 'react-redux'
const { getFormEntity,
  getFormJoins,
  mergeFormEntity,
  updateFormJoinEntity
} = require('transactions-interface-state').default
import { Avatar,
  Button,
  Icon
} from 'transactions-interface-web'
import { DELETE_PREFIX,
  getNormalizerEntity
} from 'transactions-redux-normalizer'
import { mergeReselector } from 'transactions-redux-reselector'

import { getFilteredElements } from '../../reducers/reselector'
import { automaticModes,
  joinedModes,
  joinedModeCollectionNames,
  joinedModeNames,
  modes
} from '../../utils/subscription'

class UserCard extends Component {
  constructor () {
    super ()
    this.handleNavigation = this._handleNavigation.bind(this)
  }
  _handleNavigation () {
    const { id,
      joinUserId,
      mergeReselector
    } = this.props
    // in order to get the joined entities
    // we need to set the reselector
    if (id && joinUserId !== id) {
      mergeReselector({
        WITH_JOIN: {
          key: 'userId',
          value: id
        }
      })
    }
  }
  componentDidMount () {
    this.handleNavigation()
  }
  componentDidUpdate () {
    this.handleNavigation()
  }
  render () {
    const { admin,
      email,
      expertise,
      firstName,
      id,
      isEdit,
      lastName,
      location,
      mergeFormEntity,
      modeFormJoins,
      updateFormJoinEntity
    } = this.props
    return (<div className='card user-card'
      itemScope
      itemType='http://schema.org/Person'
    >
      <div className='user-card__head'>
        <div className='user-card__head__illustration col sm-col-4'>
          <Avatar
            className='avatar user-card__head__illustration__avatar'
            id={id}
          />
        </div>
        <div className='user-card__head__content col sm-col-8'>
          <p className='user-card__head__content__name mb1'>
            {firstName} {lastName}
          </p>
          <p className='user-card__head__content__location mb1'>
            {location}
          </p>
          <p className='user-card__head__content__expertise mb1'>
            {expertise}
          </p>
        </div>
      </div>
      <div className='user-card-section user-card__modes'>
        <div className='user-card-section__title'>
          Modes
        </div>
        <div className='user-card__modes__container flex justify-between'>
          <div className='user-card__modes__container__check user-card__modes__container__check--admin'>
            <Button
              className={classnames(`button button--shadow
                user-card__modes__container__check__button__icon`, {
                'button--alive': isEdit,
                'button--disabled': !admin
              })}
              disabled={!isEdit}
              onClick={() => mergeFormEntity('users', id, { admin: !admin })}
            >
              <Icon
                className='icon user-card__modes__container__check__button__icon'
                icon='admin'
              />
            </Button>
          </div>
          {
            joinedModes.map(({collectionName, icon, name}, index) => {
              const modeFormJoin = modeFormJoins[index]
              const { nextId } = modeFormJoin
              return (<div
                className='user-card__modes__container__check'
                key={index}>
              <Button
                className={classnames(`button button--shadow
                  user-card__modes__container__check__button__icon`, {
                  'button--alive': isEdit,
                  'button--disabled': !nextId
                })}
                disabled={!isEdit}
                onClick={() => updateFormJoinEntity(collectionName,
                  modeFormJoin, { userId: id })}
              >
                <Icon
                  className='icon user-card__modes__container__check__button__icon'
                  icon={icon}
                />
              </Button>
            </div>)})
          }
          </div>
      </div>
      <div className='user-card-section user-card__details'>
        <div className='user-card-section__title'>
          Details
        </div>
      </div>
      <div className='user-card-section user-card__publications'>
        <div className='user-card-section__title'>
          Qualifying Publications
        </div>
      </div>
      <div className='user-card-section user-card__checks'>
        <div className='user-card-section__title'>
          Last Checks
        </div>
      </div>
    </div>)
  }
}

UserCard.defaultProps = {
  authorizedJoinedModeNames: []
}

function mapStateToProps (state, ownProps) {
  const {
    reselector: {
      WITH_JOIN: {
        value
      }
    }
  } = state
  const { id } = ownProps
  const formUser = getFormEntity(state, 'users', id) || {}
  const { admin,
    expertise,
    firstName,
    location,
    lastName
  } =  Object.assign({}, ownProps, formUser)
  const modeFormJoins = getFormJoins(state, joinedModeCollectionNames)
  return {
    admin,
    joinUserId: value,
    expertise,
    modeFormJoins,
    firstName,
    location,
    lastName
  }
}
export default connect(mapStateToProps, { mergeFormEntity,
  mergeReselector,
  updateFormJoinEntity
})(UserCard)
