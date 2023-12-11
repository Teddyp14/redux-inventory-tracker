import PropTypes from "prop-types"
import './Header.css'

const Header = (props: Header) => {
    return (
        <>
            <div className='header'>
                <div className="header-filler"></div>
                <h1 onClick={() => props.backToHomeFunction()} className="header-text">
                    <em>North Pacific Surf</em>
                </h1>
                <div className="header-filler"></div>
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