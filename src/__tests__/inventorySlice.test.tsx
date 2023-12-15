import inventoryReducer, { addItem, selectItem, updateItem, deleteItem } from '../redux/inventorySlice'
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

    const updatedTestingItem = { ...testingItem, title: "shortboard" }

    test("Should add an item to the inventoryList", () => {
        const initialState = {
            inventoryList: [],
            selectedItem: {}
        }
        const updatedState = inventoryReducer(initialState, addItem(testingItem))
        expect(updatedState).toEqual({ inventoryList: [testingItem], selectedItem: {} })
    })

    test("Should set value of selectedItem to a specified object in inventoryList.", () => {
        const initialState = {
            inventoryList: [testingItem],
            selectedItem: {}
        }
        const updatedState = inventoryReducer(initialState, selectItem("1"))
        expect(updatedState).toEqual({ inventoryList: [testingItem], selectedItem: testingItem })
    })

    test("Should update an existing item in inventoryList.", () => {
        const initialState = {
            inventoryList: [testingItem],
            selectedItem: {}
        }
        const updatedState = inventoryReducer(initialState, updateItem(updatedTestingItem))
        expect(updatedState).toEqual({ inventoryList: [updatedTestingItem], selectedItem: {} })
    })

    test("should delete an specified object from inventoryList.", () => {
        const initialState = {
            inventoryList: [testingItem],
            selectedItem: {}
        }
        const updatedState = inventoryReducer(initialState, deleteItem("1"))
        expect(updatedState).toEqual({ inventoryList: [], selectedItem: {} })
    })
})

