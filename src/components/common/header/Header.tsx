import React, {FC} from 'react';
import {ReactComponent as ExitSvg} from '../../../assets/icons/Exit.svg'
import styles from "./header.module.scss"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <h1 className={styles.title}>
                    Список задач
                </h1>
                <ExitSvg/>
            </div>
        </header>
    );
};

export default Header;