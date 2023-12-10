import { useState } from "react";
import { ItemData } from "../interfaces"
import { v4 } from 'uuid'
import PropTypes from 'prop-types'

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
                <label>Title
                    <input
                        type="text"
                        id="title"
                        onChange={e => {
                            setForm({
                                ...form, title: e.target.value
                            })
                        }}
                    ></input>
                </label>
                <label>Image URL
                    <input
                        type="text"
                        id="image"
                        onChange={e => {
                            setForm({
                                ...form, image: e.target.value
                            })
                        }}></input>
                </label>
                <label>Description
                    <input
                        type="text"
                        id="description"
                        onChange={e => {
                            setForm({
                                ...form, description: e.target.value
                            })
                        }}>
                    </input>
                </label>
                <label>Price
                    <input
                        type="number"
                        id="price"
                        min="0"
                        step="0.01"
                        onChange={e => {
                            setForm({
                                ...form, price: parseInt(e.target.value)
                            })
                        }}></input>
                </label>
                <label>Quantity
                    <input
                        type="number"
                        id="quantity"
                        min="0"
                        onChange={e => {
                            setForm({
                                ...form, quantity: parseInt(e.target.value)
                            })
                        }}></input>
                </label>
                <button type="submit">{props.buttonText}</button>
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