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
            state.inventoryList.push(action.payload)
        },
        selectItem: (state, action: PayloadAction<string>) => {
            state.selectedItem = state.inventoryList.filter(item => item.id === action.payload)[0]

        },
        updateItem: (state, action: PayloadAction<ItemData>) => {
            const formData = action.payload
            state.inventoryList = state.inventoryList.map(item => (item.id === formData.id ? formData : item))
        }
    }
})

export default inventorySlice.reducer;

export const { addItem, selectItem, updateItem } = inventorySlice.actions;

export const selectInventory = (state: RootState) => state.inventory

