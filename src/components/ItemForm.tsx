import { useState } from "react";
import { ItemData } from "../types"
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import './ItemForm.css'

const ItemForm = (props: ItemForm) => {
    const [form, setForm] = useState<ItemData>({
        title: props.selectedItem.title,
        image: props.selectedItem.image,
        description: props.selectedItem.description,
        price: props.selectedItem.price,
        quantity: props.selectedItem.quantity,
        id: props.selectedItem.id
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

ItemForm.propTypes = {
    handleFormSubmission: PropTypes.func,
    isNewItem: PropTypes.bool,
    buttonText: PropTypes.string,
    selectedItem: PropTypes.object


}

interface ItemForm {
    handleFormSubmission: (arg1: ItemData) => void
    isNewItem: boolean
    buttonText: string
    selectedItem: ItemData

}

export default ItemForm;