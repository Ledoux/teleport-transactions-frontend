import rootSaga from '../sagas'

export function createRun({ middlewares, store }) {
  // SAGA
  middlewares.find(middleware => middleware.name === 'sagaMiddleware')
    .run(rootSaga)
}
