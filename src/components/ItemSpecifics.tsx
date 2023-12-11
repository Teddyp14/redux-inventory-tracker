import PropTypes from "prop-types"
import { ItemData } from '../ItemDataInterface'
import './ItemSpecifics.css'

const ItemSpecifics = (props: ItemSpecifics) => {
    return (
        <>
            <div className='specifics-div'>
                <h2>{props.item.title}</h2>
                <hr />
                <img src={props.item.image} alt={props.item.description} />
                <hr />
                <h6>{props.item.description}</h6>
                <h4>${props.item.price}</h4>
                <h4>{props.item.quantity > 5 ? <span>{props.item.quantity} available</span> : <span className="low-stock">{props.item.quantity} left in stock! </span>}</h4>
                <button onClick={() => props.editItem(props.item.id)} className="btn btn-primary">Edit item</button>
                <button onClick={() => props.purchaseItem(props.item.id)} className="btn btn-success">Record a sale</button>
                <button onClick={() => props.deleteItem(props.item.id)} className="btn btn-danger">Delete item</button>
            </div>
        </>
    )
}

ItemSpecifics.propTypes = {
    item: PropTypes.object,
    editItem: PropTypes.func,
    purchaseItem: PropTypes.func,
    deleteItem: PropTypes.func
}

interface ItemSpecifics {
    item: ItemData
    editItem: (arg1: string) => void
    purchaseItem: (arg1: string) => void
    deleteItem: (arg1: string) => void
}

export default ItemSpecifics 