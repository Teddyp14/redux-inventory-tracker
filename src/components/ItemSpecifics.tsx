import PropTypes from "prop-types"
import { ItemData } from '../interfaces'
import './ItemSpecifics.css'

const ItemSpecifics = (props: ItemSpecifics) => {
    return (
        <>
            <div className='specifics-div'>
                <h2>{props.item.title}</h2>
                <img src={props.item.image} alt={props.item.description} />
                <h4>{props.item.description}</h4>
                <h4>${props.item.price}</h4>
                <h4>{props.item.quantity} left in stock</h4>
                <button onClick={() => props.editItem(props.item.id)} className="btn btn-success">Edit item</button>
                <button onClick={() => props.purchaseItem(props.item.id)} className="btn btn-primary">Purchase a {props.item.title}!</button>
            </div>
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