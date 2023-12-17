import { configureStore } from '@reduxjs/toolkit'
import inventorySliceReducer from './inventorySlice'
import pageViewSliceReducer from './pageViewSlice'

export const store = configureStore({
    reducer: {
        inventory: inventorySliceReducer,
        pageView: pageViewSliceReducer

    }
})

export type RootState = ReturnType<typeof store.getState>
export type ReduxDispatch = typeof store.dispatch