import React from 'react'
import { Avatar } from 'transactions-interface-web'
import { InputForm } from 'transactions-cms-web'

const UserHero = ({ children,
  id,
  email,
  firstName,
  lastName,
  imageUrl
}) => {
  return (
    <div className='user-hero'>
      <div className='user-hero__illustration md-col md-col-3'>
        <Avatar
          className='avatar user-hero__illustration__avatar'
          id={id}
          imageUrl={imageUrl}
          itemProp='image'
        />
      </div>
      <div className='user-hero__content md-col md-col-5'>
        <div className='user-hero--content--name'>
          <InputForm
            className='input-form user-hero--content--name__first md-col'
            collectionName='users'
            entityId={id}
            label='First Name'
            name='local.firstName'
            initialValue={firstName || ''}
            valueItemProp='givenName'
          />
          <InputForm
            className='input-form user-hero--content--name__last md-col'
            collectionName='users'
            entityId={id}
            label='Last Name'
            name='local.lastName'
            initialValue={lastName || ''}
            valueItemProp='familyName'
          />
        </div>
        <div className='user-hero--content--email'>
          <InputForm
            className='input-form user-hero--content--email'
            collectionName='users'
            entityId={id}
            label='Email'
            name='local.email'
            initialValue={email || ''}
            valueItemProp='email'
          />
        </div>
        <div className='user-hero--content--add'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default UserHero
