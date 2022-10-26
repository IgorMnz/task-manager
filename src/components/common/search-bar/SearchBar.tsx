import React, {FC, useContext} from 'react';
import styles from "./searchBar.module.scss";
import {ReactComponent as LupeSvg} from '../../../assets/icons/Lupe Icon.svg'
import {TaskListContext} from "../../../context/TaskListContext";

const SearchBar: FC = () => {

    const {term, handleChangeSearch} = useContext(TaskListContext)

    return (
        <div className={styles.wrapper}>
            <input
                type='search'
                placeholder=''
                className={styles.input}
                value={term}
                onChange={handleChangeSearch}
            />
            {(term.length === 0) && <LupeSvg className={styles.lupe}/>}

        </div>
    );
};

export default SearchBar;