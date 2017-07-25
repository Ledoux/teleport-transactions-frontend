import { createAppSchema } from 'transactions-redux-normalizer'

let descriptionsByEntityName
if (typeof document !== 'undefined') {
  descriptionsByEntityName = window.__CONFIG__ && window.__CONFIG__.descriptionsByEntityName
}

const appSchema = createAppSchema(descriptionsByEntityName)

export { appSchema }
