import { reselect as cmsReselect,
  initialState as cmsInitialState
} from 'transactions-cms-state'
import { reselect as interfaceReselect,
  initialState as interfaceInitialState
} from 'transactions-interface-state'
import { reselect as mediaReselect,
  initialState as mediaInitialState
} from 'transactions-media-state'
import { createReducer,
  getDirectFilteredElements,
} from 'transactions-redux-reselector'

const initialState = Object.assign({},
  interfaceInitialState,
  cmsInitialState,
  mediaInitialState,
  {
    'WITH_FEED_JOIN': {}
  }
)

function appReselect (id, filter, elements) {
  switch (id) {
    case 'WITH_FEED_JOIN':
      return []
  }
}

const getters = [ interfaceReselect,
  cmsReselect,
  mediaReselect,
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
