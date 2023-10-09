import { MapPinLine } from '@phosphor-icons/react';
import styles from './Address.module.css';

export function Address() {
    return (
        <div className={styles.container}>
            <div className={styles.addressHeader}>
                <MapPinLine className={styles.mapIcon} size={24} />
                <div className={styles.addressTitleContainer}>
                    <p className={styles.addressTitle}>Endereço de Entrega</p>
                    <p className={styles.addressSubtitle}>
                        Informe o endereço onde deseja receber seu pedido
                    </p>
                </div>
            </div>

            <div className={styles.addressForm}>
                <input
                    className={styles.inputCep}
                    placeholder="CEP"
                    type="text"
                />

                <input
                    type="text"
                    className={styles.inputRua}
                    placeholder="RUA"
                />

                <div className={styles.numeroComplemento}>
                    <input
                        type="text"
                        placeholder="NUMERO"
                        className={styles.inputNumero}
                    />
                    <input
                        type="text"
                        className={styles.inputComplemento}
                        placeholder="COMPLEMENTO                                            opcional"
                    />
                </div>

                <div className={styles.bairroCidadeUf}>
                    <input
                        type="text"
                        placeholder="BAIRRO"
                        className={styles.inputBairro}
                    />

                    <input
                        type="text"
                        placeholder="CIDADE"
                        className={styles.inputCidade}
                    />

                    <input
                        type="text"
                        placeholder="UF"
                        className={styles.inputUf}
                    />
                </div>
            </div>
        </div>
    );
}
