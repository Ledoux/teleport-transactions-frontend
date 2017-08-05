const { createAuthorization } = require('transactions-interface-state').default

const { modeNamesBySingularOrPluralName,
  modes
} = require('../utils/subscription').default

const authorization = createAuthorization({
  modeNamesBySingularOrPluralName,
  allModes: modes
})

export default authorization
