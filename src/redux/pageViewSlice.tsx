import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface pageViewState {
    page: number
}

const initialState: pageViewState = {
    page: 0
}

export const pageViewSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        }
    }
})

export default pageViewSlice.reducer;

export const { changePage } = pageViewSlice.actions;

export const selectPageView = (state: RootState) => state.page
