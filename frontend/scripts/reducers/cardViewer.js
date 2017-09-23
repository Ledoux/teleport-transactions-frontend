import { createViewer } from 'transactions-interface-state'

import { CardComponentsByComponentsName } from '../react/cards'

const cardViewer = createViewer('card', CardComponentsByComponentsName)

export default cardViewer
