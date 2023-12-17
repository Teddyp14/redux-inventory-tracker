import inventoryReducer, { addItem, selectItem, updateItem, deleteItem, purchaseItem } from '../redux/inventorySlice'
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

    const testingItem2 = {
        title: "5mm Wetsuit",
        image: "wetsuit",
        description: "A wetsuit with a built in hood, made for the North Pacific.",
        price: 220,
        quantity: 20,
        id: "2"
    }

    const updatedTestingItem = { ...testingItem, title: "shortboard" }

    test("Should add an item to the inventoryList", () => {
        const initialState = {
            inventoryList: [testingItem],
            selectedItem: testingItem
        }
        const updatedState = inventoryReducer(initialState, addItem(testingItem2))
        expect(updatedState).toEqual({ inventoryList: [testingItem, testingItem2], selectedItem: testingItem })
    })

    test("Should set value of selectedItem to a specified object in inventoryList.", () => {
        const initialState = {
            inventoryList: [testingItem, testingItem2],
            selectedItem: testingItem2
        }
        const updatedState = inventoryReducer(initialState, selectItem("1"))
        expect(updatedState).toEqual({ inventoryList: [testingItem, testingItem2], selectedItem: testingItem })
    })

    test("Should update an existing item in inventoryList.", () => {
        const initialState = {
            inventoryList: [testingItem],
            selectedItem: testingItem
        }
        const updatedState = inventoryReducer(initialState, updateItem(updatedTestingItem))
        expect(updatedState).toEqual({ inventoryList: [updatedTestingItem], selectedItem: testingItem })
    })

    test("should delete an specified object from inventoryList.", () => {
        const initialState = {
            inventoryList: [testingItem, testingItem2],
            selectedItem: testingItem2
        }
        const updatedState = inventoryReducer(initialState, deleteItem("1"))
        expect(updatedState).toEqual({ inventoryList: [testingItem2], selectedItem: testingItem2 })
    })

    test("Should decrement the selectedItem quantity by 1.", () => {
        const initialState = {
            inventoryList: [testingItem],
            selectedItem: testingItem
        }
        const updatedState = inventoryReducer(initialState, purchaseItem())
        expect(updatedState).toEqual({
            inventoryList: [testingItem], selectedItem: {
                title: "Wavestorm longboard",
                image: "wavestorm image",
                description: "An 8' soft-top perfect for summer waves!",
                price: 150,
                quantity: 9,
                id: "1"
            }
        })
    })
})

