import {
    Bank,
    CreditCard,
    CurrencyDollarSimple,
    Money,
} from '@phosphor-icons/react';
import styles from './Payment.module.css';

export function Payment() {
    return (
        <div className={styles.container}>
            <div className={styles.paymentHeader}>
                <CurrencyDollarSimple className={styles.mapIcon} size={24} />
                <div className={styles.paymentTitleContainer}>
                    <p className={styles.paymentTitle}>Pagamento</p>
                    <p className={styles.paymentSubtitle}>
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                    </p>
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.paymentMethods}>
                    <CreditCard className={styles.mapIcon} size={18} />
                    Cartão de credito
                </button>
                <button className={styles.paymentMethods}>
                    <Bank className={styles.mapIcon} size={18} />
                    Cartão de debito
                </button>
                <button className={styles.paymentMethods}>
                    <Money className={styles.mapIcon} size={18} />
                    Dinheiro
                </button>
            </div>
        </div>
    );
}
