import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar-container'>
                <ul className='navbar'>
                    <li><Link to='/'>Map</Link></li>
                    <li><Link to='/viz'>Visualization</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;