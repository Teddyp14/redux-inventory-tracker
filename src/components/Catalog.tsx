import PropTypes from "prop-types";
import { ItemData } from "../types";
import './Catalog.css'

const Catalog = (props: Catalog) => {

    const products = props.inventoryList.map((item) => {
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
            <button onClick={() => props.pageChange(2)} className="btn btn-success">Add new item!</button>
        </>
    )
}

Catalog.propTypes = {
    inventoryList: PropTypes.array,
    viewItemFunction: PropTypes.func,
    pageChange: PropTypes.func
}

interface Catalog {
    inventoryList: ItemData[]
    viewItemFunction: (arg1: string) => void
    pageChange: (arg1: number) => void
}

export default Catalog;