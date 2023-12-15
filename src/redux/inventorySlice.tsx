import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { ItemData } from '../types'

interface InventoryState {
    inventoryList: ItemData[],
    selectedItem: object
}

const initialState: InventoryState = {
    inventoryList: [],
    selectedItem: {}
}

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemData>) => {
            const formData = action.payload;
            state.inventoryList.push(formData)
        }
    }
})

export default inventorySlice.reducer;

export const { addItem } = inventorySlice.actions;

export const selectInventory = (state: RootState) => state.inventory

