import { createAppSchema,
  createReducer
} from 'transactions-redux-normalizer'

function createNormalizer (description) {
  const appSchema = createAppSchema(description)
  const normalizer = createReducer({ schema: appSchema })
  return normalizer
}

export default createNormalizer
