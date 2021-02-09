import React, {useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({history}) => {
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: 'Menu'
    })
    const [disabled, setDisabled] = useState(false)


    useEffect(() => {
        //    Listen for page changes
        history.listen(() => {
            setState({clicked: false, menuName: 'Menu'})
        })
    })

    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false)
        }, 1200)
    }
    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({initial: null, clicked: true, menuName: 'Close'})

        } else if (state.clicked) {
            setState({clicked: !state.clicked, menuName: 'Menu'})


        } else if (!state.clicked) {
            setState({clicked: !state.clicked, menuName: 'Close'})

        }
    }
    return <header>
        <div className="container">
            <div className="wrapper">
                <div className="inner-header">
                    <div className="logo">
                        <Link to={'/'}>
                            HAMBRG.
                        </Link>
                    </div>
                    <div className="menu">
                        <button disabled={disabled} onClick={handleMenu}>
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Hamburger state={state}/>
    </header>;
};

export default withRouter(Header);
