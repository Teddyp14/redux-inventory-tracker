import inventoryReducer, { addItem } from '../redux/inventorySlice'
import { expect, describe, test } from 'vitest'

describe("inventorySlice", () => {

    const itemToAdd = {
        title: "Wavestorm longboard",
        image: "wavestorm image",
        description: "An 8' soft-top perfect for summer waves!",
        price: 150,
        quantity: 10,
        id: "1"
    }

    test("Should add an item to the inventoryList", () => {
        const initialState = {
            inventoryList: [],
            selectedItem: []
        }
        const updatedState = inventoryReducer(initialState, addItem(itemToAdd))
        expect(updatedState).toEqual({ inventoryList: [itemToAdd], selectedItem: [] })
    })
})

