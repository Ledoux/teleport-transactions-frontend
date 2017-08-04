import { createReducer,
  getDirectFilteredElements,
} from 'transactions-redux-reselector'
const transactionsInterfaceState = require('transactions-interface-state').default

const initialState = Object.assign(transactionsInterfaceState.reselectorInitialState, {
  'WITH_FEED_JOIN': {}
})

const reselector = createReducer({ initialState,
  // This function says for the elements to be filtered given a rule
  // and the actual state for a specific filter
  getFilteredElements: (id, filter, elements) => {
    // first test all the filters coming from the transactions system
    const transactionsFilteredElements = transactionsInterfaceState.getFilteredElements(id, filter, elements)
    // if keywork next is returned it means this is a specific filter of this app
    if (transactionsFilteredElements === 'next') {
      switch (id) {
        case 'WITH_FEED_JOIN':
          return []
        default:
          return []
      }
    }
    // return
    return transactionsFilteredElements
  }}
)

export default reselector
export const getFilteredElements = reselector.getFilteredElements
