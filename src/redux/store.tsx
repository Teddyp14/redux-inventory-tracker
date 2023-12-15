import { configureStore } from '@reduxjs/toolkit'
import inventorySliceReducer from './inventorySlice'

export const store = configureStore({
    reducer: {
        inventory: inventorySliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type ReduxDispatch = typeof store.dispatch