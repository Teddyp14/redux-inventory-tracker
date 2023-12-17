import { useState } from "react";
import { ItemData } from "../types"
import { v4 } from 'uuid'
import { useSelector } from 'react-redux'
import { selectInventory } from '../redux/inventorySlice'
import './ItemForm.css'

const ItemForm = (props: ItemForm) => {
    const item = useSelector(selectInventory).selectedItem

    const [form, setForm] = useState<ItemData>({
        title: item.title,
        image: item.image,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
        id: item.id
    })
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                const id = v4()
                if (props.isNewItem === true) {
                    props.handleFormSubmission({ ...form, id })

                } else {
                    props.handleFormSubmission(form)
                }

            }}>
                <div className="row mb-3">
                    <label
                        className="col-sm-2 col-form-label"
                    >Title</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            id="title"
                            onChange={e => {
                                setForm({
                                    ...form, title: e.target.value
                                })
                            }}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        className="col-sm-2 col-form-label"
                    >Image URL</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            id="image"
                            onChange={e => {
                                setForm({
                                    ...form, image: e.target.value
                                })
                            }}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        className="col-sm-2 col-form-label"
                    >Description</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            id="description"
                            onChange={e => {
                                setForm({
                                    ...form, description: e.target.value
                                })
                            }}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        className="col-sm-2 col-form-label"
                    >Price</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="number"
                            id="price"
                            min="0"
                            step="0.01"
                            onChange={e => {
                                setForm({
                                    ...form, price: parseInt(e.target.value)
                                })
                            }}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        className="col-sm-2 col-form-label"
                    >Quantity</label>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="number"
                            id="quantity"
                            min="0"
                            max="100"
                            onChange={e => {
                                setForm({
                                    ...form, quantity: parseInt(e.target.value)
                                })
                            }}></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">{props.buttonText}</button>
            </form>
        </>
    )
}

interface ItemForm {
    handleFormSubmission: (arg1: ItemData) => void
    isNewItem: boolean
    buttonText: string

}

export default ItemForm;