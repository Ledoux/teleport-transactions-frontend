const { createCardViewer,
  createItemViewer
} = require('transactions-interface-state').default

import { CardComponentsByComponentsName,
  ItemComponentsByComponentsName
} from '../react/views'

export const cardViewer = createCardViewer(CardComponentsByComponentsName)
export const itemViewer = createItemViewer(ItemComponentsByComponentsName)
