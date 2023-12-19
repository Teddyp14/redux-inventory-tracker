import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface pageViewState {
    view: number
}

const initialState: pageViewState = {
    view: 0
}

export const pageViewSlice = createSlice({
    name: 'pageView',
    initialState,
    reducers: {
        changeView: (state, action: PayloadAction<number>) => {
            state.view = action.payload
        }
    }
})

export default pageViewSlice.reducer;

export const { changeView } = pageViewSlice.actions;

export const selectPageView = (state: RootState) => state.pageView
