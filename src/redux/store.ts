import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import rootReducer from './reducers'

export const store = configureStore({
     reducer: rootReducer ,
     middleware: getDefaultMiddleware =>
     getDefaultMiddleware({
       serializableCheck: false,
     }),
})

// export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType< typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export type AppDispatch = typeof store.dispatch;