import styles from './Cart.module.css';

import americano from '../../../../images/Americano.png';
import { Minus, Plus, Trash } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

export function Cart() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.itensContent}>
                    <div className={styles.img}>
                        <img src={americano} alt="" />
                    </div>
                    <div className={styles.nameAndAction}>
                        <p>Expresso tradicional</p>
                        <div className={styles.buttons}>
                            <div className={styles.counter}>
                                <button>
                                    <Minus className={styles.counterIcon} />
                                </button>
                                <span>1</span>
                                <button>
                                    <Plus className={styles.counterIcon} />
                                </button>
                            </div>
                            <button className={styles.buttonRemove}>
                                <Trash className={styles.trash} size={20} />{' '}
                                Remover
                            </button>
                        </div>
                    </div>
                </div>
                <p className={styles.value}>R$ 9,90</p>
            </div>

            <div className={styles.item}>
                <div className={styles.itensContent}>
                    <div className={styles.img}>
                        <img src={americano} alt="" />
                    </div>
                    <div className={styles.nameAndAction}>
                        <p>Expresso tradicional</p>
                        <div className={styles.buttons}>
                            <div className={styles.counter}>
                                <button>
                                    <Minus className={styles.counterIcon} />
                                </button>
                                <span>1</span>
                                <button>
                                    <Plus className={styles.counterIcon} />
                                </button>
                            </div>
                            <button className={styles.buttonRemove}>
                                <Trash className={styles.trash} size={20} />{' '}
                                Remover
                            </button>
                        </div>
                    </div>
                </div>
                <p className={styles.value}>R$ 9,90</p>
            </div>

            <div className={styles.resume}>
                <div className={styles.itensTotalValue}>
                    <p>Total de itens</p>
                    <p>R$ 9,90</p>
                </div>
            </div>

            <div className={styles.frete}>
                <p>Entrega</p>
                <p>R$ 3,90</p>
            </div>

            <div className={styles.total}>
                <p>Total</p>
                <p>R$ 13,80</p>
            </div>

            <NavLink
                to="/success"
                title="success"
                className={styles.buttonConfirm}
            >
                CONFIRMAR PEDIDO
            </NavLink>
        </div>
    );
}
