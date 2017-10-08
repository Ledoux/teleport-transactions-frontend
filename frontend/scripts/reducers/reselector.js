import { reselect as cmsReselect,
  initialState as cmsInitialState
} from 'transactions-cms-state'
import { reselect as interfaceReselect,
  initialState as interfaceInitialState
} from 'transactions-interface-state'
import { createReducer,
  getDirectFilteredElements,
} from 'transactions-redux-reselector'

const initialState = Object.assign({},
  interfaceInitialState,
  cmsInitialState,
  {
    // put here your filter state
    // WITH_SOMETHING: {}
  }
)

function appReselect (id, filter, elements) {
  switch (id) {
    // define the filter rule
    // case 'WITH_SOMETHING':
    //  return elements.filter(elements => <your filter function> )
  }
}

const getters = [ interfaceReselect,
  cmsReselect,
  appReselect
]

const reselector = createReducer({ initialState,
  // This function says for the elements to be filtered given a rule
  // and the actual state for a specific filter
  reselect: (id, filterState, elements) => {
    // test through all the filters
    let filteredElements = []
    for (let getter of getters) {
      filteredElements = getter(id, filterState, elements)
      // test
      if (filteredElements !== 'next') {
        break;
      }
    }
    // return
    return filteredElements
  }}
)

export default reselector
