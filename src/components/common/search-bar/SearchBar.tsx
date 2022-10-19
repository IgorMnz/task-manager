import React, {FC} from 'react';
import styles from "./searchBar.module.scss";
import {ReactComponent as LupeSvg} from '../../../assets/icons/Lupe Icon.svg'

const SearchBar: FC = () => {
    return (
        <div className={styles.wrapper}>
            <input type='search' placeholder='' className={styles.input}/>
            <LupeSvg className={styles.lupe}/>
        </div>
    );
};

export default SearchBar;