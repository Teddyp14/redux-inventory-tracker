import PropTypes from "prop-types"
import { ItemData } from '../interfaces'

const ItemSpecifics = (props: ItemSpecifics) => {
    return (
        <>
            <h2>{props.item.title}</h2>
            <img src={props.item.image} alt={props.item.description} />
            <h4>{props.item.description}</h4>
            <h4>{props.item.quantity} in stock</h4>
            <button onClick={() => props.editItem(props.item.id)}>Edit item</button>
            <button onClick={() => props.purchaseItem(props.item.id)}>Purchase a {props.item.title}!</button>
        </>
    )
}

ItemSpecifics.propTypes = {
    item: PropTypes.object,
    editItem: PropTypes.func,
    purchaseItem: PropTypes.func
}

interface ItemSpecifics {
    item: ItemData
    editItem: (arg1: string) => void
    purchaseItem: (arg1: string) => void
}

export default ItemSpecifics 