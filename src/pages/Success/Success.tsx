import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import styles from './Success.module.css';
import ImgDelivery from '../../images/Illustration.png';

export function Success() {
    return (
        <>
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Uhu! Pedido confirmado</h1>

                <h2 className={styles.subtitle}>
                    Agora é só aguardar que logo o café chegará até você
                </h2>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.address}>
                        <span className={styles.iconMap}>
                            <MapPin size={24} />
                        </span>

                        <div className={styles.addressDescription}>
                            <p>
                                Entrega em{' '}
                                <strong>
                                    {' '}
                                    Rua João Daniel Martinelli, 102
                                </strong>{' '}
                                Farrapos - Porto Alegre, RS
                            </p>
                        </div>
                    </div>

                    <div className={styles.timer}>
                        <span className={styles.iconTimer}>
                            <Timer size={24} />
                        </span>
                        <div className={styles.timerText}>
                            <p>
                                Previsão de entrega
                                <strong> 20 min - 30 min</strong>{' '}
                            </p>
                        </div>
                    </div>

                    <div className={styles.payment}>
                        <span className={styles.iconPayment}>
                            <CurrencyDollar size={24} />
                        </span>
                        <div className={styles.paymentText}>
                            <p>
                                Pagamento na entrega
                                <strong> Cartão de Crédito</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={ImgDelivery} alt="" />
                </div>
            </div>
        </>
    );
}
