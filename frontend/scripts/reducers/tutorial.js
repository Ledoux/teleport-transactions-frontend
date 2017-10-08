import { createTutorial } from 'transactions-tooltip-state'

import { activeOnboardings } from '../react/tutorials/active'

const tutorial = createTutorial({
  activeOnboardings
})

export default tutorial
