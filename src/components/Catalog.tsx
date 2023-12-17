import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'
import { selectInventory } from '../redux/inventorySlice'
import { pageView } from '../defaultValues'
import { changeView } from '../redux/pageViewSlice'
import './Catalog.css'

const Catalog = (props: Catalog) => {

    const dispatch = useDispatch()
    const inventory = useSelector(selectInventory)

    const products = inventory.inventoryList.map((item) => {
        return (
            <div key={item.id} onClick={() => props.viewItemFunction(item.id)} className="item-frame item-indicator item-cursor">
                <img src={item.image} alt={item.description} className="itemImage" />
                <h3>{item.title}</h3>
                <h4>${item.price}</h4>
                <h4>{item.quantity >= 5 ? <span>{item.quantity} available</span> : <span className="low-stock">{item.quantity} left in stock! </span>}</h4>
            </div>
        )
    })

    return (
        <>
            <div className="catalog-container">
                {products}
            </div >
            <hr />
            <button onClick={() => dispatch(changeView(pageView.addItemForm))} className="btn btn-success">Add new item!</button>
        </>
    )
}

Catalog.propTypes = {
    viewItemFunction: PropTypes.func,
}

interface Catalog {
    viewItemFunction: (arg1: string) => void
}

export default Catalog;