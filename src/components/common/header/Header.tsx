import React, {FC} from 'react';
import {ReactComponent as ExitSvg} from '../../../assets/icons/Exit.svg'
import styles from "./header.module.scss"
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <Link to={"/"}>
                    <h1 className={styles.title}>
                        Список задач
                    </h1>
                </Link>
                <Link to={"/custom"}>
                    <ExitSvg className={styles.icon}/>
                </Link>
            </div>
        </header>
    );
};

export default Header;