import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import glassCoffee from '../images/glass-coffee.png';
import styles from './Panel.module.css';

export function Panel() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora
                </p>
            </div>

            <div className={styles.containerIcons}>
                <div className={styles.esquerda}>
                    <div className={styles.contentIcons}>
                        <ShoppingCart className={styles.cart} size={32} />
                        <span className={styles.spanText}>
                            Compra simples e segura
                        </span>
                    </div>

                    <div className={styles.contentIcons}>
                        <Timer className={styles.timer} size={32} />
                        <span className={styles.spanText}>
                            Entrega rápida e rastreada
                        </span>
                    </div>
                </div>

                <div>
                    <div className={styles.contentIcons2}>
                        <Package className={styles.package} size={32} />
                        <span className={styles.spanText}>
                            Embalagem mantém o café intacto
                        </span>
                    </div>
                    <div className={styles.contentIcons2}>
                        <Coffee className={styles.coffee} size={32} />
                        <span className={styles.spanText}>
                            O café chega fresquinho até você
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <img src={glassCoffee} alt="" />
            </div>
        </div>
    );
}
