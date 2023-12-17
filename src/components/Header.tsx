import { useDispatch } from 'react-redux'
import { changeView } from "../redux/pageViewSlice"
import { pageView } from "../defaultValues"
import './Header.css'

const Header = () => {
    const dispatch = useDispatch()


    return (
        <>
            <div className='header'>
                <div className="header-filler-1"></div>
                <h1 onClick={() => dispatch(changeView(pageView.home))} className="header-text">
                    <em>Tillamook Surf Co.</em>
                </h1>
                <div className="header-filler-2"></div>
            </div>
        </>
    )
}

export default Header