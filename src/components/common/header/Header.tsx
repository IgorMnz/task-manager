import React, {FC} from 'react';
import {ReactComponent as ExitSvg} from '../../../assets/icons/Exit.svg'
import styles from "./header.module.scss"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.title}>
                    Список задач
                </div>
                <ExitSvg/>
            </div>
        </header>
    );
};

export default Header;