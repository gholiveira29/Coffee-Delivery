import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.svg';
import styles from './Header.module.css';

import { MapPin, ShoppingCart } from '@phosphor-icons/react';

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <NavLink to="/" title="home">
                    <img
                        className={styles.logo}
                        src={Logo}
                        alt="logotipo do site"
                    />
                </NavLink>
                <nav className={styles.nav}>
                    <span className={styles.containerLocation}>
                        <MapPin size={24} />
                        <span>Osasco,SP</span>
                    </span>
                    <NavLink to="/checkout" title="Checkout">
                        <span className={styles.cart}>
                            <ShoppingCart size={24} />
                        </span>
                    </NavLink>
                </nav>
            </header>
        </>
    );
}
