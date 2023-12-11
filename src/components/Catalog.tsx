import PropTypes from "prop-types";
import { ItemData } from "../interfaces";
import './Catalog.css'

const Catalog = (props: Catalog) => {
    const products = props.inventoryList.map((item) => {
        return (
            <div key={item.id} onClick={() => props.viewItemFunction(item.id)} className="item-frame">
                <img src={item.image} alt={item.description} className="itemImage" />
                <h3>{item.title}</h3>
                <h4>${item.price}</h4>
                <h4>{item.quantity} left in stock!</h4>
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