import inventoryReducer, { addItem, selectItem } from '../redux/inventorySlice'
import { expect, describe, test } from 'vitest'

describe("inventorySlice", () => {

    const testingItem = {
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
            selectedItem: {}
        }
        const updatedState = inventoryReducer(initialState, addItem(testingItem))
        expect(updatedState).toEqual({ inventoryList: [testingItem], selectedItem: {} })
    })

    test("Should set value of selectedItem to a specified object in Inventory list.", () => {
        const initialState = {
            inventoryList: [testingItem],
            selectedItem: {}
        }
        const updatedState = inventoryReducer(initialState, selectItem("1"))
        expect(updatedState).toEqual({ inventoryList: [testingItem], selectedItem: testingItem })
    })
})

