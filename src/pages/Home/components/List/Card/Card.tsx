import styles from './Card.module.css';

import ImgCafe from '../images/Americano.png';
import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react';

export function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imgCAfe}>
                <img src={ImgCafe} alt="" />
            </div>

            <div className={styles.type}>
                <span>Tradicional</span>
            </div>

            <h3>Expresso Americano</h3>
            <div className={styles.description}>
                <p>Expresso diluído, menos intenso que o tradicional</p>
            </div>

            <div className={styles.containerValue}>
                <div className={styles.valueContent}>
                    <span className={styles.value}>
                        R$ <strong> 9,90</strong>
                    </span>
                </div>
                <div className={styles.counter}>
                    <button>
                        <Minus className={styles.counterIcon} />
                    </button>
                    <span>1</span>
                    <button>
                        <Plus className={styles.counterIcon} />
                    </button>
                </div>
                <div className={styles.cart}>
                    <button>
                        <ShoppingCartSimple
                            className={styles.cartIcon}
                            size={20}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
