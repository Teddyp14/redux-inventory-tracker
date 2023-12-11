import PropTypes from "prop-types"
import './Header.css'

const Header = (props: Header) => {
    return (
        <>
            <h1 onClick={() => props.backToHomeFunction()} className="header">
                North Pacific Surf
            </h1>
        </>
    )
}

Header.propTypes = {
    backToHomeFunction: PropTypes.func
}

interface Header {
    backToHomeFunction: () => void
}

export default Header