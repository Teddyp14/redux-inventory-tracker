import pageViewReducer, { changePage } from '../redux/pageViewSlice'
import { expect, describe, test } from 'vitest'

describe("pageViewSlice", () => {
    test("Should change the value of page", () => {
        const initialState = {
            page: 0
        }
        const updatedState = pageViewReducer(initialState, changePage(1))
        expect(updatedState).toEqual({ page: 1 })
    })
})