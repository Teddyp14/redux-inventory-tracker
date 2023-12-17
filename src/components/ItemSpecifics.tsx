import { useSelector, useDispatch } from 'react-redux'
import { pageView } from "../defaultValues"
import { changeView } from "../redux/pageViewSlice"
import { selectInventory } from '../redux/inventorySlice'
import './ItemSpecifics.css'

const ItemSpecifics = (props: ItemSpecifics) => {

    const dispatch = useDispatch()
    const item = useSelector(selectInventory).selectedItem

    return (
        <>
            <div className='specifics-div'>
                <h2>{item.title}</h2>
                <hr />
                <img src={item.image} alt={item.description} />
                <hr />
                <h6>{item.description}</h6>
                <h4>${item.price}</h4>
                <h4>{item.quantity > 5 ? <span>{item.quantity} available</span> : <span className="low-stock">{item.quantity} left in stock! </span>}</h4>
                <button onClick={() => dispatch(changeView(pageView.updateItemForm))} className="btn btn-primary">Edit item</button>
                <button onClick={() => props.purchaseItem()} className="btn btn-success">Record a sale</button>
                <button onClick={() => props.deleteItem(item.id)} className="btn btn-danger">Delete item</button>
            </div>
        </>
    )
}

interface ItemSpecifics {
    purchaseItem: () => void
    deleteItem: (arg1: string) => void
}

export default ItemSpecifics 