import PropTypes from "prop-types";
import { ItemData } from "../interfaces";

const Catalog = (props: Catalog) => {
    const products = props.inventoryList.map((item) => {
        return (
            <div key={item.id} onClick={() => props.changePageFunction(item.id)} >
                <img src={item.image} alt={item.description} />
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
            </div>
        )
    })

    return (
        <>
            {products}
        </>
    )
}

Catalog.propTypes = {
    inventoryList: PropTypes.array,
    changePageFunction: PropTypes.func
}

interface Catalog {
    inventoryList: ItemData[]
    changePageFunction: (arg1: string) => void
}

export default Catalog;