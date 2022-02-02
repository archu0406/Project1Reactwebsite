import React, { useState, useEffect } from 'react';
import '../css/Header.css';

function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

  return (
    <header>
        <nav className='navbar'>
            <div className='navbar-container'>
                <a className='navbar-logo' > TRVLBREAK <i class='fas fa-plane-departure'></i></a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a>About</a>
                    </li>
                    <li className='nav-item'>
                        <a>Destination</a>
                    </li>
                    <li className='nav-item'>
                        <a>Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );
}

export default Header;

