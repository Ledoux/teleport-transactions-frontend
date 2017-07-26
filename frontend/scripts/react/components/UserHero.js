import React from 'react'
import { Avatar,
  InputForm
} from 'transactions-interface-web'

const UserHero = ({ children,
  id,
  email,
  firstName,
  isEdit,
  isNew,
  lastName,
  imageUrl
}) => {
  return (<div className='user-hero'>
    <div className='user-hero__illustration md-col md-col-3'>
      <Avatar
        className='avatar user-hero__illustration__avatar'
        id={id}
        imageUrl={imageUrl}
        itemProp='image'
      />
    </div>
    <div className='user-hero__content md-col md-col-5'>
      <div className='user-hero__content__name'>
        <InputForm
          className='input-form user-hero__content__name__first md-col'
          collectionName='users'
          entityId={id}
          isEdit={isEdit}
          isNew={isNew}
          label='First Name'
          name='firstName'
          initialValue={firstName || ''}
          valueItemProp='givenName'
        />
        <InputForm
          className='input-form user-hero__content__name__last md-col'
          collectionName='users'
          entityId={id}
          isEdit={isEdit}
          isNew={isNew}
          label='Last Name'
          name='lastName'
          initialValue={lastName || ''}
          valueItemProp='familyName'
        />
      </div>
      <div className='user-hero__content__email'>
        <InputForm
          className='input-form user-hero__content__email'
          collectionName='users'
          entityId={id}
          isEdit={isEdit}
          isNew={isNew}
          label='Email'
          name='email'
          initialValue={email || ''}
          valueItemProp='email'
        />
      </div>
      <div className='user-hero__content__add'>
        {children}
      </div>
    </div>
  </div>)
}

export default UserHero
