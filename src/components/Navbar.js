import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="menu__flex-container">
                <div className="menu__title">
                    foresite
                </div>

                <div className="menu__button-group">
                    <Link to='/' style={{ textDecoration: 'none' }}><button> Map </button></Link>
                    <Link to='/viz' style={{ textDecoration: 'none' }}> <button>  Visualization  </button></Link>
                </div>
            </div>
        );
    }
}

export default Navbar;