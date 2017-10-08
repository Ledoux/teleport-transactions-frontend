import React from 'react'

import UserHero from '../heros/UserHero'

const UserItem = props => {
  return (<div className='user-item'
    itemScope
    itemType='http://schema.org/Person'
  >
    <UserHero {...props} />
  </div>)
}

export default UserItem
