import { createViewer } from 'transactions-interface-state'

import * as ItemComponentsByComponentsName from '../react/items'

const itemViewer = createViewer('item', ItemComponentsByComponentsName, {
isPlural: true })

export default itemViewer
