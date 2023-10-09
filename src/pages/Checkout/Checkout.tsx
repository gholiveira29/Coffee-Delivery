import styles from './Checkout.module.css';
import { Address } from './components/Address/Address';

export function Checkout() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Complete seu Pedido</h2>

            <Address />
        </div>
    );
}
