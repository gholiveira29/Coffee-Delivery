import Logo from '../images/logo.svg';
import styles from './Header.module.css';

import { MapPin, ShoppingCart } from '@phosphor-icons/react';

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img
                    className={styles.logo}
                    src={Logo}
                    alt="logotipo do site"
                />
                <nav className={styles.nav}>
                    <span className={styles.containerLocation}>
                        <MapPin size={24} />
                        <span>Osasco,SP</span>
                    </span>

                    <span className={styles.cart}>
                        <ShoppingCart size={24} />
                    </span>
                </nav>
            </header>
            <hr />
        </>
    );
}
