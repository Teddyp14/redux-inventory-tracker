import pageViewReducer, { changeView } from '../redux/pageViewSlice'
import { expect, describe, test } from 'vitest'

describe("pageViewSlice", () => {
    test("Should change the value of page", () => {
        const initialState = {
            view: 0
        }
        const updatedState = pageViewReducer(initialState, changeView(1))
        expect(updatedState).toEqual({ view: 1 })
    })
})