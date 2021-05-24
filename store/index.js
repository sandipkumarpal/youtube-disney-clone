import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from '../store/features/user'
import movieReducer from '../store/features/movie'

export const store = configureStore({
  reducer: {
    // ...initialState,
    user: userReducer,
    movie: movieReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
})

// export const store = initialState => initializeStore(initialState)

// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// import requestStatusReducer from '@bms/bigtix-web-common/es/store/reducers/requestStatus'
// import storeRequestStatus from '@bms/bigtix-web-common/es/store/middleware/storeRequestStatus'
// import thunk from 'redux-thunk'
// import reducers from './reducers'

// export const initializeStore = initialState => {
//   return createStore(
//     combineReducers({
//       requestStatus: requestStatusReducer,
//       ...reducers
//     }),
//     initialState,
//     composeWithDevTools(applyMiddleware(storeRequestStatus, thunk))
//   )
// }

// export const makeStore = initialState => initializeStore(initialState)
