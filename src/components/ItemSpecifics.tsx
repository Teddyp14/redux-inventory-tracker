import PropTypes from "prop-types"
import { ItemData } from '../interfaces'

const ItemSpecifics = (props: ItemSpecifics) => {
    return (
        <>
            <h2>{props.item.title}</h2>
            <img src={props.item.image} alt={props.item.description} />
            <h4>{props.item.description}</h4>
        </>
    )
}

ItemSpecifics.propTypes = {
    item: PropTypes.object
}

interface ItemSpecifics {
    item: ItemData
}

export default ItemSpecifics 