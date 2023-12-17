import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { ItemData } from '../types'
import defaultList from '../defaultList'

interface InventoryState {
    inventoryList: ItemData[],
    selectedItem: ItemData
}

const initialState: InventoryState = {
    inventoryList: defaultList,
    selectedItem: defaultList[0]
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
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.inventoryList = state.inventoryList.filter(item => item.id !== action.payload)
        },
        purchaseItem: (state) => {
            if (state.selectedItem.quantity > 0) {
                state.selectedItem.quantity -= 1
                // const newInventory = inventory.map(item => item.id === id ? { ...item, quantity } : item)
            }
        },
        updateInventory: (state) => {
            state.inventoryList = state.inventoryList.map(item => item.id === state.selectedItem.id ? state.selectedItem : item)
        }
    }
})

export default inventorySlice.reducer;

export const { addItem, selectItem, updateItem, deleteItem, purchaseItem, updateInventory } = inventorySlice.actions;

export const selectInventory = (state: RootState) => state.inventory

