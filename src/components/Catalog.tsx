import PropTypes from "prop-types";
import { ItemData } from "../interfaces";

const Catalog = (props: Catalog) => {
    const products = props.inventoryList.map((item) => {
        return (
            <div key={item.id}>
                <img src={item.image} alt={item.description} />
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
                <p>{item.description}</p>
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
    inventoryList: PropTypes.array
}

interface Catalog {
    inventoryList: ItemData[]
}

export default Catalog;