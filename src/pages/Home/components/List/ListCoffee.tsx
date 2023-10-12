import { Card } from './Card/Card';

import styles from './ListCoffee.module.css';

export function ListCoffee() {
    return (
        <div className={styles.container}>
            <h1>Nossos cafés</h1>
            <Card />
        </div>
    );
}
