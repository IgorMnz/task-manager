import React, {FC} from 'react';
import styles from "./menuBar.module.scss"
import MyButton from "../../ui/buttons/MyButton";
import SearchBar from "../search-bar/SearchBar";
import {ReactComponent as PlusSvg} from '../../../assets/icons/plus.svg'
import {ReactComponent as DelSvg} from '../../../assets/icons/delete.svg'
import {ReactComponent as VisibleSvg} from '../../../assets/icons/visible.svg'
import {ReactComponent as NotVisibleSvg} from '../../../assets/icons/not-visible.svg'

const MenuBar: FC = () => {
    return (
        <div className={styles.menu}>
            <MyButton variant='menu_primary'>
                <PlusSvg/>
            </MyButton>
            <MyButton variant='menu_secondary'>
                <DelSvg/>
            </MyButton>
            <SearchBar/>
            <MyButton variant='menu_primary'>
                <VisibleSvg/>
            </MyButton>
            <MyButton variant='menu_secondary'>
                <NotVisibleSvg/>
            </MyButton>
        </div>
    );
};

export default MenuBar;