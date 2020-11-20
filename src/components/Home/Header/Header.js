import React from 'react';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header-bg" style={{ backgroundColor: '#FBD062' }}>
                <Navbar />
                <HeaderContainer />
            </div>
        </div>
    );
};

export default Header;