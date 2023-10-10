import styles from './Checkout.module.css';
import { Address } from './components/Address/Address';
import { Payment } from './components/Payment/Payment';

export function Checkout() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Complete seu Pedido</h2>

            <div className={styles.content}>
                <Address />
                <Payment />
            </div>
        </div>
    );
}
