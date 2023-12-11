import PropTypes from "prop-types"
import './Header.css'

const Header = (props: Header) => {
    return (
        <>
            <div className='header'>
                <div className="header-filler-1"></div>
                <h1 onClick={() => props.backToHomeFunction()} className="header-text">
                    <em>Tillamook Surf Co.</em>
                </h1>
                <div className="header-filler-2"></div>
            </div>
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