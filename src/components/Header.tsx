import PropTypes from "prop-types"

const Header = (props: Header) => {
    return (
        <>
            <h1 onClick={() => props.backToHomeFunction()}>
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