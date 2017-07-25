const join = { recursive: { depth: 'all' } }

const modes = [
  {
    availableCollections: [

    ],
    hasModeAccess: state => true,
    icon: 'guest',
    name: 'guest'
  },
  {
    availableCollections: [
      {
        join,
        name: 'feeds'
      }
    ],
    hasModeAccess: state => state.user && state.user.active,
    icon: 'user',
    name: 'user',
    requireName: 'userIn'
  },
  {
    availableCollections: [
      {
        name: 'users'
      }
    ],
    icon: 'gear',
    hasModeAccess: state => state.user && state.user.admin,
    name: 'admin',
    requireName: 'adminIn'
  },
  {
    availableCollections: [
    ],
    icon: 'editor',
    isJoin: true,
    name: 'editor',
    requireName: 'userIn'
  }
]

export default modes
