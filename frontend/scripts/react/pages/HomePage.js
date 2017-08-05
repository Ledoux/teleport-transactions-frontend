import React from 'react'
import { connect } from 'react-redux'
const { getTransactionsProps } = require('transactions-interface-state').default
import { BellButton,
  CheckInteraction,
  Explore,
  Section,
  Title,
  TourButton
} from 'transactions-interface-web'

import TeleportWelcome from '../components/TeleportWelcome'
import { TOUR_PATH } from '../../utils/apis'

const usersExploreOptions = [{ collectionName: 'users',
  entityName: 'user',
  maxDisplayCount: 3,
  RightInteractionComponent: CheckInteraction
}]

const HomePage = (props) => {
  const { firstName } = props
  const transactionsProps = getTransactionsProps(props)
  return (
    <main className='page home-page main'>
      <Section extraClass='home-page__welcome'>
        <TeleportWelcome {...JSON.parse(window.TELEPORT_WELCOME_STRING)} />
      </Section>

      {
        firstName && (
          <Section extraClass='home-page__explore p3'>
            <p className='home-page__explore__title center mb2 h2'>
              Use {'<'}Explore{' />'} to quick search on your entities!
            </p>
            <Title icon='experts' text='USERS' />
            <Explore
              getRequestQuery={query => {
                // attributes in the user objects
                // are contained into the nested local object
                const requestQuery = {}
                Object.keys(query)
                  .forEach(queryKey => {
                    const requestQueryKey = queryKey.replace(/_in_/g, '')
                      .replace('_or_', '_or__in_local.')
                      .replace(/_OR_/g, '_OR__in_local.')
                    requestQuery[requestQueryKey] = query[queryKey]
                  })
                return requestQuery
              }}
              inputTemplate='_or__in_firstName_OR__in_lastName_OR__in_email:{{value}}'
              isAdd
              label='users'
              options={usersExploreOptions}
              placeholder='search for users'
              {...transactionsProps}
            />
          </Section>
        )
      }

      {
        !firstName && (
          <Section extraClass='home-page__tour'>
            <Title icon='experts' text='TOUR' />
            <TourButton
              email={'robert.totoscano@gmail.com'}
              history={history}
              helpersCollectionName='userOnboardings'
              path={TOUR_PATH}
            />
            <p className='home-page__tour__subtitle'>
              click here to explore the website as a user
            </p>
          </Section>
        )
      }
    </main>
  )
}

function mapStateToProps ({ user: { firstName }}) {
  return {
    firstName
  }
}
export default connect(mapStateToProps)(HomePage)
